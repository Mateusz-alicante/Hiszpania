const Fair = require('../../Schemas/Fairs')


const loadFairs = async (req, res) => {
    let query = {}
    const cycle = req.header('cycle')

    const filters = JSON.parse(req.header('filters'))
    filters.startDate && (query['startDate'] = {"$gte": new Date(filters.startDate), "$lte": new Date(filters.endDate)})
    filters.endDate && (query['endDate'] = {"$gte": new Date(filters.startDate), "$lte": new Date(filters.endDate)})

    const fairs = await Fair.find(query)
    .limit(10)
    .skip(cycle * 10)
    .select("-body -__v")
    .sort({createdAt: -1})
    

    res.send(fairs)
}

const loadSingleFair = async (req, res) => {
    const id = req.query.id

    const fair = await Fair.findOne({ _id: id})
    .select("-__v")

    res.send(fair)

}

module.exports = {
    loadFairs,
    loadSingleFair
}