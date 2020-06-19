var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

const HandleNewUser = require('../../DB/Actions/HandlenewUser')

router.post('/login', (req, res) => {
    console.log(req.body)
})

router.post('/newUser', HandleNewUser)

module.exports = router