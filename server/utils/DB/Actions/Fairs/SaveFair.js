const Fair = require('../../Schemas/Fairs')

const saveFair = async (req, res) => {
    const { title, subtitle, bodyHTML: body, imageURL: image, imageDescription, startDate, endDate, category, location } = req.body

    try {
        const fair = new Fair({
            title,
            subtitle,
            body,
            image,
            imageDescription,
            author: "TestAuthor",
            startDate,
            endDate,
            category,
            location
        })

        await fair.save()

        return res.status(201).send({
            message: "Article has been saved correctly",
            id: fair.id
        })
    
    } catch (error) {
        console.log(error)
        return res.status(422).send("Article data is does not pass the validation.      " + error)
        
    }

}

module.exports = saveFair