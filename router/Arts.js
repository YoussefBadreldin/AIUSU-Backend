const express = require('express');
const router = express.Router();
const { addArtsCandidate, deleteArtsCandidate, getAllArtsCandidates } = require('../controller/Arts');

// Route to add a new arts candidate
router.post('/candidates', addArtsCandidate);

// Route to get all arts candidates
router.get('/candidates', getAllArtsCandidates);

// Route to delete an arts candidate by name
router.delete('/candidates/:name', deleteArtsCandidate);

module.exports = router;
