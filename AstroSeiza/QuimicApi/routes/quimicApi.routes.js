const express = require('express');
const router = express.Router();
const quimicApi = require('../controllers/tablaPeriod.controller')

router.get('/',quimicApi.pruebaQuimicApi)
router.get('/1',quimicApi.ApiQuimic)

module.exports = router