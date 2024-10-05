const express = require('express');
const router = express.Router();
const { addCulturalCandidate, deleteCulturalCandidate, getAllCulturalCandidates } = require('../controller/Cultural');

// Route to add a new cultural candidate
router.post('/addculturalcandidate', addCulturalCandidate);

// Route to get all cultural candidates
router.get('/getculturalcandidates', getAllCulturalCandidates);

// Route to delete a cultural candidate by name
router.delete('/deleteculturalcandidate/:name', deleteCulturalCandidate); // Assuming you want to delete by name

module.exports = router;
