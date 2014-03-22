var io = require('socket.io').listen(2005);
io.sockets.on('connection', function(client){
	console.log('Got connection! from ' + client);
    client.on('message', function(msg, err){
    	console.log('message: ' + msg)
     	   client.broadcast.emit('message', msg);
    	});
 });
