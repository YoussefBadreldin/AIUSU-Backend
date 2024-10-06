const express = require('express');
const router = express.Router();
const { addSocial, getSocial } = require('../controller/SocialController');

router.post('/', addSocial);
router.get('/', getSocial);

module.exports = router;
