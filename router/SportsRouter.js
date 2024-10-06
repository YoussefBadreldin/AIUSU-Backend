const express = require('express');
const router = express.Router();
const { addSports, getSports } = require('../controller/SportsController');

router.post('/', addSports);
router.get('/', getSports);

module.exports = router;
