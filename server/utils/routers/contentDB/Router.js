var express = require('express')
var router = express.Router()

const { nonAdminAuth, AdminAuth } = require('../../DB/Middleware/Auth')

const saveArticle = require('../../DB/Actions/Articles/SaveArticle')
const saveFair = require('../../DB/Actions/Fairs/SaveFair')
const { loadArticles, loadSingleArticle } = require('../../DB/Actions/Articles/LoadArticles')
const { loadFairs, loadSingleFair } = require('../../DB/Actions/Fairs/LoadFairs')

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.post('/saveArticle', AdminAuth, saveArticle)

router.post('/saveFair', AdminAuth, saveFair)


router.get('/loadArticles', loadArticles)

router.get('/loadFairs', loadFairs)


router.get('/loadSingleArticle', loadSingleArticle)
router.get('/loadSingleFair', loadSingleFair)

module.exports = router