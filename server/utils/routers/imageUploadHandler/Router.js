var express = require('express')
var router = express.Router()

const toS3 = require('./ToS3')
const toStorage = require('./toStorage')

const { nonAdminAuth, AdminAuth } = require('../../DB/Middleware/Auth')

// middleware that is specific to this router
const fileUpload = require('express-fileupload')

router.use(fileUpload())

// define the home page route
router.post('/upload', AdminAuth, async (req, res) => {
    const url = await toStorage(req.files.upload)
    console.log(url)
    res.json({
      url
    })
})


  
module.exports = router