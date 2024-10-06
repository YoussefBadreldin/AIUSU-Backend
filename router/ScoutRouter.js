const express = require('express');
const router = express.Router();
const { addScout, getScout } = require('../controller/ScoutController');

router.post('/', addScout);
router.get('/', getScout);

module.exports = router;
