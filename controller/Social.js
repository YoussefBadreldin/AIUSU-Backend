const { SocialCandidate } = require('../models/Social'); 

// Add a new social candidate
const addSocialCandidate = async function(req, res) {
    try {
        const {
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        } = req.body;

        const newCandidate = new SocialCandidate({
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        });

        await newCandidate.save();
        res.status(200).json({ message: 'Social candidate added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding social candidate' });
    }
};

// Delete a social candidate by name
const deleteSocialCandidate = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await SocialCandidate.deleteOne({ candidate_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Social candidate deleted successfully' });
        } else {
            res.status(404).json({ message: 'Social candidate not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting social candidate' });
    }
};

// Get all social candidates
const getAllSocialCandidates = async function(req, res) {
    try {
        const candidates = await SocialCandidate.find();
        if (candidates.length === 0) {
            return res.status(404).json({ message: 'No social candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching social candidates' });
    }
};

module.exports = { addSocialCandidate, deleteSocialCandidate, getAllSocialCandidates };
