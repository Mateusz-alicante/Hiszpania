const Page = require('../../Schemas/Pages');
const { date } = require('joi');

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
        return res.status(422).send("Article data is does not pass the validation.      " + error)

    }

}

const deletePage = async (req, res) => {
    const { id } = req.params

    try {

        const page = await Page.deleteOne({ _id: id })

        if (page.n == 1) {
            return res.status(200).send({
                message: "Page has been removed correctely",
            })
        } else {
            res.status(404).send({
                message: "This page was not found refresh the page and try again"
            })
        }



    } catch (error) {
        console.log(error)
        return res.status(422).send("An error occured while trying to delete the page.      " + error)

    }

}

const updatePage = async (req, res) => {
    const { id, title, body } = req.body

    try {

        const page = await Page.findOneAndUpdate({ _id: id })

        page.title = title
        page.body = body
        page.createdAt = Date.now()


        page.save()

        return res.status(201).send({
            message: "Page has been updated correctely",
            url: page.url
        })

    } catch (error) {
        console.log(error)
        return res.status(422).send("An error occured while trying to delete the page.      " + error)

    }

}

module.exports = { savePage, deletePage, updatePage }