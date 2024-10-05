const { ClubsCandidate } = require('../models/Clubs'); 

// Add a new club candidate
const addClubCandidate = async function(req, res) {
    try {
        const {
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        } = req.body;

        const newCandidate = new ClubsCandidate({
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        });

        await newCandidate.save();
        res.status(200).json({ message: 'Candidate added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding candidate' });
    }
};

// Delete a club candidate by name
const deleteClubCandidate = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await ClubsCandidate.deleteOne({ candidate_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Candidate deleted successfully' });
        } else {
            res.status(404).json({ message: 'Candidate not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting candidate' });
    }
};

// Get all club candidates
const getAllClubCandidates = async function(req, res) {
    try {
        const candidates = await ClubsCandidate.find();
        if (candidates.length === 0) {
            return res.status(404).json({ message: 'No candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching candidates' });
    }
};

module.exports = { addClubCandidate, deleteClubCandidate, getAllClubCandidates };
