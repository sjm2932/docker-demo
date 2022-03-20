var express = require('express');
const { rmSync } = require('fs');
var app = express();

app.get('/', function (req, res) {
    rmSync.send('Hello world!');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});