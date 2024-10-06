const express = require('express');
const router = express.Router();
const { addCultural, getCultural } = require('../controller/CulturalController');

router.post('/', addCultural);
router.get('/', getCultural);

module.exports = router;
