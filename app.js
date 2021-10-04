const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/', routes)

// middleware function
// next looks for next piece of middleware that is able to handle the error object
app.use((err, req, res, next) => {
    res.json(err);
});

module.exports = app; 