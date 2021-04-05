const users = require('../models/users')
const usersController = {
    index: (req, res) => {
        return res.send(users.listUsers());
    }
}

module.exports = usersController;