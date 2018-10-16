var express = require('express');
var formidable = require("formidable");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("index", {
        "title": "你好啊"
    });
});
app.post('/form', function(req, res, next) {
    console.log(req);
});



app.listen(8080);