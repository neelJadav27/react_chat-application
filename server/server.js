const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket)=> {
    console.log('New client connected');

    socket.on('disconnected',()=>{
        console.log('Client is disconnected');
    });

    socket.on('chat message', (message)=>{
        console.log('message', message);
        io.emit('chat message', message);
    });
});