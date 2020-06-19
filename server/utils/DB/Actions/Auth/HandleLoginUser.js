const { User, validate } = require('../../Schemas/User')
const bcrypt = require('bcrypt')

const HandleLoginUser = async (req, res) => {
    //find an existing user
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send("No user with this email found");

    const correctPassword = await bcrypt.compare(req.body.password, user.password)

    if (!correctPassword) return res.status(401).send("Incorrect password");

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
        _id: user._id,
        name: user.name,
        email: user.email
    });
}

module.exports = HandleLoginUser