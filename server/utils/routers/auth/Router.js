var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

const { nonAdminAuth, AdminAuth } = require('../../DB/Middleware/Auth')

const HandleNewUser = require('../../DB/Actions/Auth/HandlenewUser')
const HandleLoginUser = require('../../DB/Actions/Auth/HandleLoginUser')

router.post('/login', HandleLoginUser)

router.get('/test', AdminAuth, (req, res) => {
    res.send("Authenticated!")
})

router.post('/newUser', HandleNewUser)

module.exports = router