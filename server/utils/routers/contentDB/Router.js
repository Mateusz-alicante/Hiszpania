var express = require('express')
var router = express.Router()
// var cors = require('cors')

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.get('/test', (req, res) => {
    console.log("got message on DB router!")
    res.json({message: "Test request recieved"})
})

router.post('/saveArticle', (req, res) => {
    console.log("db request recieved")
    console.log(req.body)
    res.json({messaage: "message recieved"})
})

module.exports = router