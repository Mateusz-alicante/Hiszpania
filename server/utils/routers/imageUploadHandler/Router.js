var express = require('express')
var router = express.Router()

const toS3 = require('./ToS3')
const toImgBB = require('./toImgBB')

// middleware that is specific to this router
const fileUpload = require('express-fileupload')

router.use(fileUpload())

// define the home page route
router.post('/upload', async (req, res) => {
    const url = await toS3(req.files.upload)
    console.log(req.headers)
    res.json({
      url
    })
})

router.get('/test', (req, res) => {
  console.log("got message on DB router!")
  res.json({message: "Test request recieved"})
})

router.post('/uploadMain', async (req, res) => {
  console.log(req.files)
})

router.get("/", (req, res) => {
  console.log("Message on route recieved")
})
  
  
module.exports = router