from flask import Flask
from flask_socketio import SocketIO, emit

#eventlet
#flask
#flask-socketio

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/api/')
def hello_world():
    return 'Hello, World!'

@socketio.on('message')
def handle_message(message):
    print('recieved message', message)

@socketio.on('connect')
def test_connect():
    print('pls connect')

# @app.route('/socket/')
# def turn_on_socket():
#     socketio.run(app, path='/ws')


if __name__ == '__main__':
     socketio.run(app)