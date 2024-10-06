const express = require('express');
const router = express.Router();
const { addArts, getArts } = require('../controller/ArtsController');

router.post('/', addArts);
router.get('/', getArts);

module.exports = router;
