var express = require('express');
var router = express.Router();

var userController = require('./controllers/userController');

//USER ROUTES//

//sign up
router.post('/user/register', userController.userRegister);

//login
router.post('/user/login', userController.userLogin);

module.exports = router;
