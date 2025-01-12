const { default: mongoose } = require('mongoose')
const Campaign = require('../models/campaign.models')

const addCampaign = async (req, res) => {
    const { title, description, deadline } = req.body

    try {
        const campaign = await Campaign.create({ title, description, deadline })
        res.status(200).json(campaign)
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

const getCampaigns = async (req, res) => {
    const campaigns = await Campaign.find()

    res.status(200).json(campaigns)
}

const getSingleCampaign = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error : 'There is no such campaign'})
    }

    const campaign = await Campaign.findById(id)

    if (!campaign) {
        return res.status(404).json({ error : 'There is no such campaign'})
    }

    res.status(200).json(campaign)
}

module.exports = {
    getCampaigns,
    getSingleCampaign,
    addCampaign
}