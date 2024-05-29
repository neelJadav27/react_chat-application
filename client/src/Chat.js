import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Function to handle incoming messages
        const handleMessage = (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        // Listen for chat messages
        socket.on('chat message', handleMessage);

        // Cleanup function to remove the listener when the component unmounts
        return () => {
            socket.off('chat message', handleMessage);
        };
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            socket.emit('chat message', input);
            setInput('');
        }
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
