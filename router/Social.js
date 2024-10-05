const express = require('express');
const router = express.Router();
const { addSocialCandidate, deleteSocialCandidate, getAllSocialCandidates } = require('../controller/Social');

// Route to add a new social candidate
router.post('/addsocialcandidate', addSocialCandidate);

// Route to get all social candidates
router.get('/getsocialcandidates', getAllSocialCandidates);

// Route to delete a social candidate by name
router.delete('/deletesocialcandidate/:name', deleteSocialCandidate); // Assuming you want to delete by name

module.exports = router;
