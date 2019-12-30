const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv/config');

const app = express();

app.use(bodyParser.urlencoded({extended: false}), bodyParser.json());

app.use(cors({
    origin: ["http://localhost:8080/pages", "localhost:8080/pages"],
    credentials: true
}));

const Pages = require('./router/api/Pages')

app.use('/api/pages', cors(), Pages)

app.listen(3000, function() {
    console.log('Running on port 3000')
})