const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds255917.mlab.com:55917/heroku_9mmg6k8r";
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper_stash";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

const routes = require('./routes');
app.use('/', routes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});