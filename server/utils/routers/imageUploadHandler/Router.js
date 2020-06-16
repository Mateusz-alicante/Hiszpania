var express = require('express')
var router = express.Router()

const toS3 = require('./ToS3')

// middleware that is specific to this router
const fileUpload = require('express-fileupload')

router.use(fileUpload())

// define the home page route
router.post('/upload', async (req, res) => {
    const url = await toS3(req.files.upload)
    res.json({
      url
    })
})

router.get("/", (req, res) => {
  console.log("Message on route recieved")
})
  
  
module.exports = router