var User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.userRegister = (req, res) => {
    var newUser = new User({
        _id: req.body.id,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    });

    newUser.save((err, user) => {
        if (err) {
            res.status(500).send("Internal Server Error - Please try again later!");
        }
        else {
            res.status(201).send("user signed up");
        }
    });
}