const { create } = require('../models/campaign.models')
const Influencer = require('../models/influencer.models')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign(({ _id }), process.env.SECRET_KEY, { expiresIn : '3d' })
}

const registerInfluencer = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await Influencer.register(username, email, password)
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

const loginInfluencer = async (req,res) => {
    const { email, password } = req.body

    try {
        const user = await Influencer.login(email, password)
        const token = createToken(user._id)

        res.status(400).json({ email, token })
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

module.exports = {
    registerInfluencer,
    loginInfluencer
}