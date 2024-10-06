const express = require('express');
const router = express.Router();
const { addClubs, getClubs } = require('../controller/ClubsController');

router.post('/', addClubs);
router.get('/', getClubs);

module.exports = router;
