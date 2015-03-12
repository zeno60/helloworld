var userNames = [];
var userCount = 0;

module.exports = function(server) {
    var io = require('socket.io')(server);

    io.on('connection', function(socket){
        console.log('a user connected');

        socket.on('new user', function(userName) {
            console.log('added user ' + userName);
            socket.userName = userName;
            userNames.push(userName);
            userCount++;

            io.emit('user joined', {
                userName: socket.userName
            });

            io.emit('user list', {
                userNames: userNames,
                userCount: userCount
            });
        });

        socket.on('chat message', function (data) {
            console.log('received message for ' + socket.userName);

            io.emit('chat message', {
                userName: socket.userName,
                message: data
            });
        });

        socket.on('disconnect', function(){
            console.log('user disconnected');

            userNames.inde
            var index = userNames.indexOf(socket.userName);
            if(index > -1) {
                userNames.splice(index, 1);
                userCount--;
            }

            io.emit('user left', {
                userName: socket.userName
            });

            io.emit('user list', {
                userNames: userNames,
                userCount: userCount
            });
        });
    });

    return io;
}