import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

function subscribeToTimer(data_package) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
    socket.emit('message', data_package);
  
} 

export { subscribeToTimer }