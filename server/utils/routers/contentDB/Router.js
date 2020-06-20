var express = require('express')
var router = express.Router()

const { nonAdminAuth, AdminAuth } = require('../../DB/Middleware/Auth')

const saveArticle = require('../../DB/Actions/Articles/SaveArticle')
const loadArticles = require('../../DB/Actions/Articles/LoadArticles')

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.post('/saveArticle', AdminAuth, saveArticle)

router.get('/loadArticles', loadArticles)

module.exports = router