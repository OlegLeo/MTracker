const express = require('express');
const WebSocket = require('ws');


const app = express();
const PORT = 3000;

// Create an HTTP server
const server = app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Motorcycle Tracker Backend!');
});

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

app.get('/status', (req, res) => {
    res.json({ message: 'Server is running smoothly!' });
});





