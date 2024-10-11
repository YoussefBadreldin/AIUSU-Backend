const express = require('express');
const MembersController = require('../controller/MembersController');

const router = express.Router();

// Route to add a new Member
router.post('/add', MembersController.addMember);

// Route to get all Members
router.get('/', MembersController.getMembers); // Route for fetching all Members

module.exports = router;
