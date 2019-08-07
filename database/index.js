const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:Straton523@ds259787.mlab.com:59787/heroku_hkh472lv";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

module.exports = connection