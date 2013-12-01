var express = require('express');

var Server = express();
Server.use(express.static(__dirname + '/'));
Server.listen(3000);
console.log("Server running on localhost:3000");
