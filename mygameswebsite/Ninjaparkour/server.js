const express = require('express');
const http = require('http');

//socket io
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app)
const port = 4000;

const io = new Server(server);

app.use(express.static('public'));

app.get('/', () => {
    res.sendFile('index.html');
})

server.listen(port, () => {
    console.log('listening on *:' + port);
});

//Wenn sich ein User verbindet
io.on('connection', (socket) => {
    console.log('a new user is connected ' + socket.id);
})

