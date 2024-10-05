const express = require('express');
const router = express.Router();
const { addSportsCandidate, deleteSportsCandidate, getAllSportsCandidates } = require('../controller/Sports');

// Route to add a new sports candidate
router.post('/addsportcandidate', addSportsCandidate);

// Route to get all sports candidates
router.get('/getsportcandidates', getAllSportsCandidates);

// Route to delete a sports candidate by name
router.delete('/deletesportcandidate/:name', deleteSportsCandidate); // Assuming you want to delete by name

module.exports = router;
