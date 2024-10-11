const express = require('express');
const MembersController = require('../controller/MembersController');

const router = express.Router();

// Route to add a new member
router.post('/add', MembersController.addMember);

// Route to get all members
router.get('/', MembersController.getMembers);

module.exports = router;
