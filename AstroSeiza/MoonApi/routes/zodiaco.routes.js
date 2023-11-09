const express = require("express");
const router = express.Router();
const zodiaco = require("../controllers/zodiaco.controller");

router.post("/", zodiaco.getZodiacSign);

module.exports = router;
