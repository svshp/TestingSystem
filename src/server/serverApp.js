'use srict';

const express = require('express');
const path = require('path');

const app = express();

const db = require('./queries');

app.use(express.static('public'));

app.get('/', function(request, response) {
//    response.header(200);
//    response.send('<h2>Start SERVER!</h2>');
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/users', db.getUsers);
app.get('/api/categories-tests', db.getCategoriesTests);

module.exports = app;
