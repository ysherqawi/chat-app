const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('We have a new connection!!');

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  });
  socket.on('disconnect', () => {
    console.log('User has left!!');
  });
});

const router = require('./router');
app.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
