const express = require('express');
const router = express.Router();
const { getCampaigns, addCampaign, getSingleCampaign } = require('../controllers/campaign.controllers')

router.get('', getCampaigns)
router.post('', addCampaign)
router.get('/:id', getSingleCampaign)

module.exports = router