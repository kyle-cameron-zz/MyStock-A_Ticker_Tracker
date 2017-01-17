var express = require('express');
var app = express();

app.use(express.static('client'))
// vv TBU refactor for the below, request of Sam. #itissafertouseabsolutepathname
// app.use('/static', express.static(path.join(__dirname, 'client')))

var port = process.env.PORT || 3000;

app.listen(port);

module.exports = app;
