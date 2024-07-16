const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); 
const mongoose = require('mongoose');


const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",  // Allow requests from this origin
        methods: ["GET", "POST"]
    }
});

mongoose.connect('mongoose://localhost:27017/chatapp',{useNewUrlParser:true, useUnifiedTopology: true}).then(()=> console.log('MongoDB connected')).catch(err=>console.log(err));

app.use(cors()); 
app.use(express.json());

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