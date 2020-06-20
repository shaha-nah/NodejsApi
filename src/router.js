var express = require('express');
var router = express.Router();

var userController = require('./controllers/userController');

//USER ROUTES//

//sign up
router.post('/user/register', userController.userRegister);
module.exports = router;