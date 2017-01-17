var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static('client'))
app.use(bodyParser.json())

require('./routes.js')(app, express);

var port = process.env.PORT || 3000;

app.listen(port);

module.exports = app;
