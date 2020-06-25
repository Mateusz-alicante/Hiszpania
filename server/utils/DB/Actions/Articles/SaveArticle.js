const Article = require('../../Schemas/Articles')

const saveArticle = async (req, res) => {
    const { title, subtitle, bodyHTML: body, imageURL: image, imageDescription } = req.body

    try {
        const article = new Article({
            title,
            subtitle,
            body,
            image,
            imageDescription,
            author: "TestAuthor"
        })

        await article.save()

        return res.status(201).send({
            message: "Article has been saved correctly",
            id: article.id
        })
    
    } catch (error) {
        console.log(error)
        return res.status(422).send("Article data is does not pass the validation.      " + error)
        
    }

}

const removeArticle = async (req, res) => {
    const id = req.params.id

    try {
        await Article.findByIdAndDelete(id)

        return res.status(200).send({
            message: "Article has been removed correctly"
        })
    } catch (error) {
        console.log(error)
        return res.status(422).send("An error occured while tryinh to delte the article.      " + error)
        
    }
}

const updateArticle = async (req, res) => {
    const { title, subtitle, bodyHTML: body, imageURL: image, imageDescription, id } = req.body

    try {
        await Article.findByIdAndUpdate(id, {
            title,
            subtitle,
            body,
            image,
            imageDescription,
            createdAt: Date.now()
        })

        return res.status(201).send({
            message: "Article has been updates correctly",
        })
    } catch (error) {
        console.log(error)
        return res.status(422).send("An error occured while trying to update the article.      " + error)
        
    }
}



module.exports = {saveArticle, removeArticle, updateArticle}