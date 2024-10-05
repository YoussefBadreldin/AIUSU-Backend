const { ScientificCandidate } = require('../models/Scientific'); 

// Add a new scientific candidate
const addScientificCandidate = async function(req, res) {
    try {
        const {
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        } = req.body;

        const newCandidate = new ScientificCandidate({
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        });

        await newCandidate.save();
        res.status(200).json({ message: 'Scientific candidate added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding scientific candidate' });
    }
};

// Delete a scientific candidate by name
const deleteScientificCandidate = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await ScientificCandidate.deleteOne({ candidate_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Scientific candidate deleted successfully' });
        } else {
            res.status(404).json({ message: 'Scientific candidate not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting scientific candidate' });
    }
};

// Get all scientific candidates
const getAllScientificCandidates = async function(req, res) {
    try {
        const candidates = await ScientificCandidate.find();
        if (candidates.length === 0) {
            return res.status(404).json({ message: 'No scientific candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching scientific candidates' });
    }
};

module.exports = { addScientificCandidate, deleteScientificCandidate, getAllScientificCandidates };
