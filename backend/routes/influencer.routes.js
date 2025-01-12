const express = require('express')
const router = express.Router()
const { registerInfluencer, loginInfluencer } = require('../controllers/influencer.controllers')

router.post('/register', registerInfluencer)
router.post('/login', loginInfluencer)

module.exports = router