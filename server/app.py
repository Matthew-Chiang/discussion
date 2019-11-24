from flask import Flask
from flask_socketio import SocketIO, emit

import endless_stream_mic
from flask import jsonify

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