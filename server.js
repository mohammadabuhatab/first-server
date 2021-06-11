'use strict';


require('dotenv').config(); // npm i dotenv
const express = require('express'); //npm i express
const cors = require('cors');

const server = express();
server.use(cors()); //  make my server opened for anyone

// const PORT = 3001;
const PORT = process.env.PORT;

// http://localhost:3001/
server.get('/', (req, res) => {
    res.send('home route')
})

// http://localhost:3001/test
server.get('/test', (request, response) => {
    let str = 'hello from back end';
    response.status(200).send(str);
})