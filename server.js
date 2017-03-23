const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());

require('./routes.js')(app, express);

const port = process.env.PORT || 3000;

app.listen(port);

module.exports = app;
