const Page = require('../../Schemas/Pages')

const savePage = async (req, res) => {
    const { title, body } = req.body

    try {

        const url = title.replace(/\s+/g, '').toLowerCase();

        const page = new Page({
            title,
            body,
            author: "TestAuthor",
            url
        })

        await page.save()

        return res.status(201).send({
            message: "Article has been saved correctly",
            id: page.id,
            url: page.url
        })
    
    } catch (error) {
        console.log(error)
        return res.status(422).send("Article data is does not pass the validation.      " + error)
        
    }

}

module.exports = savePage