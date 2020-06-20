var express = require('express')
var router = express.Router()
// var cors = require('cors')

const saveArticle = require('../../DB/Actions/Articles/SaveArticle')

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.get('/test', (req, res) => {
    console.log("got message on DB router!")
    res.json({message: "Test request recieved"})
})

router.post('/saveArticle', saveArticle)

module.exports = router