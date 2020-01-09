const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: false}), bodyParser.json());

app.use(cors({
    origin: ["http://localhost:8080/pages", "localhost:8080/pages"],
    credentials: true
}));

const Pages = require('./router/api/Pages')
const Chapters = require('./router/api/Chapters')
const Projects = require('./router/api/Project')

app.use('/api/pages', cors(), Pages)
app.use('/api/chapters', cors(), Chapters)
app.use('/api/projects', cors(), Projects)

//handle production
if(process.env.NODE_ENV ===  'production') {
    //static folder
    app.use(express.static(__dirname + '/public/index.html'));

    //handle SPA
    app.get(/.*/, function(req, res){
        res.sendFile(__dirname + '/public/index.html');
    })
}

app.listen(3000, function() {
    console.log('Running on port 3000')
})