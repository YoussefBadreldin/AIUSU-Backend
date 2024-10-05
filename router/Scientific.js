const express = require('express');
const router = express.Router();
const { addScientificCandidate, deleteScientificCandidate, getAllScientificCandidates } = require('../controller/Scientific');

// Route to add a new scientific candidate
router.post('/addscientificcandidate', addScientificCandidate);

// Route to get all scientific candidates
router.get('/getscientificcandidates', getAllScientificCandidates);

// Route to delete a scientific candidate by name
router.delete('/deletescientificcandidate/:name', deleteScientificCandidate); // Assuming you want to delete by name

module.exports = router;
