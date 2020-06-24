const Page = require('../../Schemas/Pages')


const getPagesUrls = async (req, res) => {
    const pages = await Page.find({}, {url: 1, title: 1})
    .sort({createdAt: -1})

    res.send(pages)
}

const LoadPage = async (req, res) => {
    const ParamsURL = req.params.url
    const page = await Page.findOne({ url: ParamsURL })

    res.send(page)
}

const getAllPages = async (req, res) => {
    console.log('got request on route')
    const pages = await Page.find({})
    .sort({createdAt: -1})

    res.send(pages)
}


module.exports = {
    getPagesUrls,
    LoadPage,
    getAllPages
}