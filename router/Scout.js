const express = require('express');
const router = express.Router();
const { addScoutCandidate, deleteScoutCandidate, getAllScoutCandidates } = require('../controller/Scout');

// Route to add a new scout candidate
router.post('/addscoutcandidate', addScoutCandidate);

// Route to get all scout candidates
router.get('/getscoutcandidates', getAllScoutCandidates);

// Route to delete a scout candidate by name
router.delete('/deletescoutcandidate/:name', deleteScoutCandidate); // Assuming you want to delete by name

module.exports = router;
