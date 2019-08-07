const User = require('../database/models/User')

module.exports = (req, res) => {
    User.create(req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).send(err))
}