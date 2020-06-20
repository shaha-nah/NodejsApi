//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const morgan = require('morgan');

//routing
var apiRouter = require('./router');

//define express app
const app = express();

//enable CORS for all requests
app.use(cors());

//enable morgan for logs
app.use(morgan('combined'));

//use bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

//setup mongodb connection
const mongoDbUrl = "mongodb+srv://superhxman:Abcd1234@cluster0-4ht2w.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connectionn error: '));

app.use('/api', apiRouter);
//defining endpoints
app.get('/', (req, res) => {
    res.redirect('./router');
});

// app.listen(process.env.PORT, (err) => {
app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else{
        console.log("Server running on port", 3000)
    }
});