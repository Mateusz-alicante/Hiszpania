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

const removeFair = async (req, res) => {
    const id = req.params.id

    try {
        await Fair.findByIdAndDelete(id)

        return res.status(200).send({
            message: "Fair has been removed correctly"
        })
    } catch (error) {
        console.log(error)
        return res.status(422).send("An error occured while tryinh to delte the fair.      " + error)
        
    }
}

const updateFair = async (req, res) => {
    const { title, subtitle, bodyHTML: body, imageURL: image, imageDescription, startDate, endDate, category, location, id } = req.body

    try {
        await Fair.findByIdAndUpdate(id, {
            title, subtitle, bodyHTML: body, imageURL: image, imageDescription, startDate, endDate, category, location
        })


        return res.status(201).send({
            message: "Article has been saved correctly"
        })
    
    } catch (error) {
        console.log(error)
        return res.status(422).send("Article data is does not pass the validation.      " + error)
        
    }

}

module.exports = {saveFair, removeFair, updateFair}