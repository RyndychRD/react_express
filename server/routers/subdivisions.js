const express = require('express')
const {getSubdivisions} = require("./controllers/subdivisionController");
const router = express.Router();


router.get('/', getSubdivisions)

module.exports = router;