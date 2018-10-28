var express = require('express');
var app = express();
var request = require('request');
app.use(express.static('./public'));

app.use('/', (req, res) => {
    var url;

    url = 'http://192.168.1.115' + req.url;
    req.pipe(request(url)).pipe(res);


})

app.listen(8089);