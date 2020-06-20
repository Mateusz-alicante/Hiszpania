const Article = require('../../Schemas/Articles')

const saveAtricle = async (req, res) => {
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

        return res.status(201).send("Article has been saved correctly")
    
    } catch (error) {
        console.log(error)
        return res.status(422).send("Article data is does not pass the validation.      " + error)
        
    }

}

module.exports = saveAtricle