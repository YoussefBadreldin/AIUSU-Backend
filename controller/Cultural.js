const { CulturalCandidate } = require('../models/Cultural'); 

// Add a new cultural candidate
const addCulturalCandidate = async function(req, res) {
    try {
        const {
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        } = req.body;

        const newCandidate = new CulturalCandidate({
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        });

        await newCandidate.save();
        res.status(200).json({ message: 'Cultural candidate added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding cultural candidate' });
    }
};

// Delete a cultural candidate by name
const deleteCulturalCandidate = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await CulturalCandidate.deleteOne({ candidate_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Cultural candidate deleted successfully' });
        } else {
            res.status(404).json({ message: 'Cultural candidate not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting cultural candidate' });
    }
};

// Get all cultural candidates
const getAllCulturalCandidates = async function(req, res) {
    try {
        const candidates = await CulturalCandidate.find();
        if (candidates.length === 0) {
            return res.status(404).json({ message: 'No cultural candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching cultural candidates' });
    }
};

module.exports = { addCulturalCandidate, deleteCulturalCandidate, getAllCulturalCandidates };
