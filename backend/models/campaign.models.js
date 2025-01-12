const mongoose = require('mongoose')

const campaignSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true,
        default: 'Active'
    },
    deadline : {
        type: Date,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Campaign', campaignSchema)