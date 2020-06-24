const Article = require('../../Schemas/Articles')

const testVar = "test"

const loadArticles = async (req, res) => {
    const cycle = req.header('cycle')
    const articles = await Article.find({})
    .limit(10)
    .skip(cycle * 10)
    .select("-body -__v")
    .sort({createdAt: -1})
    
    

    res.send(articles)
}

const loadSingleArticle = async (req, res) => {
    const id = req.query.id

    const article = await Article.findOne({ _id: id})
    .select("-__v")

    res.send(article)

}

module.exports = {
    loadArticles,
    loadSingleArticle
}