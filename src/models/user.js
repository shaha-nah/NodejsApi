const mongoose = require('mongoose');
// const {stringify} 

var schema = mongoose.Schema;

var userSchema = new schema({
    _id:{type: Number},
    email: {type: String, required: true, lowercase: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);