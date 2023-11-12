const express = require('express');
const router = express.Router();
const categApi = require('../controllers/categoriaPeriod.controller')

router.get('/',categApi.CategApi)

module.exports = router