# from google.cloud import speech_v1
# from google.cloud.speech_v1 import enums
#
#
# def sample_long_running_recognize(storage_uri):
#     """
#     Transcribe long audio file from Cloud Storage using asynchronous speech
#     recognition
#
#     Args:
#       storage_uri URI for audio file in Cloud Storage, e.g. gs://[BUCKET]/[FILE]
#     """
#
#     client = speech_v1.SpeechClient()
#
#     storage_uri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw'
#
#     # Sample rate in Hertz of the audio data sent
#     sample_rate_hertz = 16000
#
#     # The language of the supplied audio
#     language_code = "en-US"
#
#     # Encoding of audio data sent. This sample sets this explicitly.
#     # This field is optional for FLAC and WAV audio formats.
#     encoding = enums.RecognitionConfig.AudioEncoding.LINEAR16
#     config = {
#         "sample_rate_hertz": sample_rate_hertz,
#         "language_code": language_code,
#         "enable_automatic_punctuation": True,
#         "encoding": encoding,
#     }
#     audio = {"uri": storage_uri}
#
#     operation = client.long_running_recognize(config, audio)
#
#     print(u"Waiting for operation to complete...")
#     response = operation.result()
#
#     for result in response.results:
#         # First alternative is the most probable result
#         alternative = result.alternatives[0]
#         print(u"Transcript: {}".format(alternative.transcript))

import io
import os

# Imports the Google Cloud client library
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types

def main():

    # Instantiates a client
    client = speech.SpeechClient()

    # The name of the audio file to transcribe
    file_name = os.path.join(
        os.path.dirname(__file__),
        # 'resources',
        'test.mp3')

    # Loads the audio into memory
    with io.open(file_name, 'rb') as audio_file:
        content = audio_file.read()
        audio = types.RecognitionAudio(content=content)

    config = types.RecognitionConfig(
        # encoding=enums.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,#.AudioEncoding.MULAW,
        # sample_rate_hertz=16000,
        enable_automatic_punctuation = True,
        language_code='en-US')

    # Detects speech in the audio file
    response = client.recognize(config, audio)

    transcript = ""

    for result in response.results:
        transcript += result.alternatives[0].transcript

    return transcript
