//get the needed libraries
var express = require('express');
var app = express();
var path = require('path');

//set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

//set up our one route to the index.html file
app.get('*', function (req, res) {
    console.log('Incoming connection changing');
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//start the server on port 8080
app.listen(8080);
console.log('Connect to port 8080!');