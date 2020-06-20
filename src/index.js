//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//define express app
const app = express();

//enable CORS for all requests
app.use(cors());

//use bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

//defining endpoints
app.get('/', (req, res) => {
    res.send("Hello World");
});