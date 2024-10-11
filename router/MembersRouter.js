const express = require('express');
const router = express.Router();
const { addMember, getMembers } = require('../controller/MembersController');

router.post('/', addMember);
router.get('/', getMembers);

module.exports = router;
