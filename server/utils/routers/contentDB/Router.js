var express = require('express')
var router = express.Router()

const { nonAdminAuth, AdminAuth } = require('../../DB/Middleware/Auth')

const {saveArticle, removeArticle, updateArticle} = require('../../DB/Actions/Articles/SaveArticle')
const saveFair = require('../../DB/Actions/Fairs/SaveFair')
const { savePage, deletePage, updatePage} = require('../../DB/Actions/Pages/SavePage')
const { loadArticles, loadSingleArticle } = require('../../DB/Actions/Articles/LoadArticles')
const { loadFairs, loadSingleFair } = require('../../DB/Actions/Fairs/LoadFairs')
const { getPagesUrls, LoadPage, getAllPages } = require('../../DB/Actions/Pages/LoadPages')


const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.post('/saveArticle', AdminAuth, saveArticle)
router.get('/deleteArticle/:id', AdminAuth, removeArticle)
router.post('/updateArticle', AdminAuth, updateArticle)

router.post('/saveFair', AdminAuth, saveFair)

router.post('/savePage', AdminAuth ,savePage)


router.get('/loadArticles', loadArticles)

router.get('/loadFairs', loadFairs)

router.get('/loadPagesUrls', getPagesUrls)
router.get('/loadPage/:url', LoadPage)
router.get('/loadFullPages', AdminAuth, getAllPages)
router.get('/deletePage/:id', AdminAuth, deletePage)
router.post('/updatePage', AdminAuth, updatePage)


router.get('/loadSingleArticle', loadSingleArticle)
router.get('/loadSingleFair', loadSingleFair)

module.exports = router