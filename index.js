//Node Server Which will handle Socket io connection


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

const users={};

io.on('connection',socket => {
    socket.on('new-user-joined',name => {
             console.log("new user joined", name);
              users[socket.id]=name;
              socket.broadcast.emit('user-joined',name);
          });

    socket.on('send',message => {
        socket.broadcast.emit('receive',{message : message,name : users[socket.id]});
    });

     socket.on('disconnect',message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id]
    });
});

server.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
