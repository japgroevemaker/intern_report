const express = require('express');
const mongodb = require('mongodb');
require('dotenv/config');
const router = express.Router();

router.get('/:title', async function(req, res){
  const title = req.params.title
  const page = await loadPages();
  
  res.send(await page.find({title:title}).toArray())
})

async function loadPages(){
  const client = await mongodb.MongoClient.connect('YOUR DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return client.db('intern_report').collection('pages')
}

module.exports = router