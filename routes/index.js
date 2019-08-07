const routes = require('express').Router();
const user = require('./user')

routes.get('/', (req, res) => res.status(200).json({ message: "connected" }))
routes.post('/user', user)

module.exports = routes;