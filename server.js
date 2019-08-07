const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan')
const dbConnection = require('./database')

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const routes = require('./routes');
app.use('/', routes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});