var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50 // limit each IP to 50 requests per windowMs
  });

const { nonAdminAuth, AdminAuth } = require('../../DB/Middleware/Auth')

const HandleNewUser = require('../../DB/Actions/Auth/HandlenewUser')
const HandleLoginUser = require('../../DB/Actions/Auth/HandleLoginUser')

router.post('/login', limiter, HandleLoginUser)

router.get('/test', limiter, AdminAuth, (req, res) => {
    res.send("Authenticated!")
})

router.post('/newUser', HandleNewUser)

module.exports = router