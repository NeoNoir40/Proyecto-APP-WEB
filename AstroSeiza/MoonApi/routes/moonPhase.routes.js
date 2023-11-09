const express = require('express');
const router = express.Router();
const moonPhase = require('../controllers/moonPhase.controller')

router.get('/',moonPhase.pruebaMoonApi)
router.get('/1',moonPhase.CuartoMenguante)

module.exports = router