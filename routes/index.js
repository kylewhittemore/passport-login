const routes = require('express').Router();
const user = require('./user')
// const login = require('./login')
const passport = require('../passport')

routes.get('/', (req, res) => res.status(200).json({ message: "connected" }))
routes.post('/user', user)
// routes.post('/login', login)
routes.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

module.exports = routes;