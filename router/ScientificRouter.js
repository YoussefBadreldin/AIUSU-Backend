const express = require('express');
const router = express.Router();
const { addScientific, getScientific } = require('../controller/ScientificController');

router.post('/', addScientific);
router.get('/', getScientific);

module.exports = router;
