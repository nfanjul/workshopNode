var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/routes');

var port = process.env.PORT || 1337;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use('/api', api);

var server = http.createServer(app);

server.listen(port);
