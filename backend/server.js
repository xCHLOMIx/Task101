require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const mongoose = require('mongoose')
const campaignRoutes = require('./routes/campaign.routes')
const influencerRoutes = require('./routes/influencer.routes')
const cors = require('cors')
const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, (req, res) => {
            console.log("App is listening on PORT " + process.env.PORT)
        })
    })

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/campaigns', campaignRoutes)
app.use('/api/influencer', influencerRoutes)