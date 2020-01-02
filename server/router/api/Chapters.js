const express = require('express');
const mongodb = require('mongodb');
require('dotenv/config')
const router = express.Router();

router.get('/', async function(req, res){
    const chapter = await loadChapters();
  
    res.send(await chapter.find({}).toArray())
  })

router.get('/:title', async function(req, res){
  const title = req.params.title
  const chapter = await loadChapters();

  res.send(await chapter.find({title:title}).toArray())
})

// router.get('/:id', async function(req, res){
//   const id = req.params.id
//   const page = await loadPages();
  
//   res.send(await page.find({page_id:id}).toArray())
// })

async function loadChapters(){
  const client = await mongodb.MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@intern-6gs0a.azure.mongodb.net/intern_report?retryWrites=true&w=majority`, {
    useNewUrlParser: true,                        
    useUnifiedTopology: true
  });
  return client.db('intern_report').collection('chapters')
}

module.exports = router