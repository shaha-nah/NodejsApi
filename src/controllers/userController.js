var User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//sign up
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

//login
exports.userLogin = (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err){
            return res.status(500).send("Internal server error - Please try again later");
        }
        if (!user){
            return res.status(404).send("No user found");
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (passwordIsValid){
            var token = jwt.sign({id: user._id, role: "admin"}, "supersecret", {
                expiresIn: 86400 //expires in 24 hours
            });
            res.status(200).send({auth: true, token: token});
        }
        else{
            res.status(403).send("username/password is invalid");
        }
    });
}