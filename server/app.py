from flask import Flask
from flask_socketio import SocketIO, emit

import endless_stream_mic
import file_audio
from flask import jsonify
from flask import request
import json

from model import lda_model

#eventlet
#flask
#flask-socketio

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

buffer = []

@app.route('/api/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/record')
def start_record():
    print('hello')
    transcript_rec = endless_stream_mic.main()

    return jsonify(transcript=transcript_rec)

@app.route('/api/upload')
def upload():
    print('hello')
    transcript_file = file_audio.main()

    print(transcript_file)
    return jsonify(transcript=transcript_file)

@app.route('/api/topics', methods=['POST'])
def analyze_topics():
    print('hello topics')

    if not request.json:
        return "not a json post"

    print(request.json)
    package_dict = request.json

    score, topic_list = lda_model.main(package_dict['text'])
    
    return jsonify(topics=topic_list,score=str(score))


#socket methods were to stream audio from react-mic
#in the time crunch of a hackathon, we had no time to properly encode a WebM file into a MP3 for use in google speech api

@socketio.on('message')
def handle_message(message):
    print('recieved message')
    transcript = endless_stream_mic.main()
    send_transcript(transcript)

@socketio.on('connect')
def start_recording():
    print('pls connect')

@socketio.on('my event')
def send_transcript(transcript):
    emit('response',transcript)

# @app.route('/socket/')
# def turn_on_socket():
#     socketio.run(app, path='/ws')


if __name__ == '__main__':
     socketio.run(app)