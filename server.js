const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan')
const dbConnection = require('./database')
const session = require('express-session')
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'semi-charmed-kinda-life',
    
    resave: false, //required
    saveUninitialized: false //required
}))

app.use((req, res, next) => {
    console.log('req.session', req.session)
    return next();
})

app.post('/user', (req, res) => {
    console.log("user signup")
    req.session.username = req.body.username
    res.end()
})

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const routes = require('./routes');
app.use('/', routes);


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});