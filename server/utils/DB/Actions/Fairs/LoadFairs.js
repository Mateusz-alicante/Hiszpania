const Fair = require('../../Schemas/Fairs')

const loadFairs = async (req, res) => {
    const cycle = req.header('cycle')
    const fairs = await Fair.find({})
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