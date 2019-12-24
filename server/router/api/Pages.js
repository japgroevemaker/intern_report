const express = require('express');
const mongodb = require('mongodb');
require('dotenv/config');
const router = express.Router();

router.get('/', async function(req, res){
  const page = await loadPages();

  res.send(await page.find({}).toArray())
})

async function loadPages(){
  const client = await mongodb.MongoClient.connect('mongodb+srv://japgroevemaker:P5pwv9VV@intern-6gs0a.azure.mongodb.net/intern_report?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return client.db('intern_report').collection('pages')
}

module.exports = router