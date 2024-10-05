const express = require('express');
const router = express.Router();
const { addClubCandidate, deleteClubCandidate, getAllClubCandidates } = require('../controller/Clubs');

// Route to add a new club candidate
router.post('/addcandidate', addClubCandidate);

// Route to get all club candidates
router.get('/getcandidates', getAllClubCandidates);

// Route to delete a club candidate by name
router.delete('/deletecandidate/:name', deleteClubCandidate); // Assuming you want to delete by name

module.exports = router;
