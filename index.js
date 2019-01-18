var express = require('express');
var socket = require('socket.io');
// App setup
var app = express();
var server = app.listen(4005, function(){
    console.log('listening for requests on port 4005,');
});
// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
         console.log(data,"socket-------",socket.id);
        // io.sockets.emit('chat', data);
        io.to(socket.id).emit("chat", { message: 'Ping' } );
    });

});
