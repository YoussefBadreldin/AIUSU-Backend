const { ScoutCandidate } = require('../models/Scout'); 

// Add a new scout candidate
const addScoutCandidate = async function(req, res) {
    try {
        const {
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        } = req.body;

        const newCandidate = new ScoutCandidate({
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        });

        await newCandidate.save();
        res.status(200).json({ message: 'Scout candidate added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding scout candidate' });
    }
};

// Delete a scout candidate by name
const deleteScoutCandidate = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await ScoutCandidate.deleteOne({ candidate_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Scout candidate deleted successfully' });
        } else {
            res.status(404).json({ message: 'Scout candidate not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting scout candidate' });
    }
};

// Get all scout candidates
const getAllScoutCandidates = async function(req, res) {
    try {
        const candidates = await ScoutCandidate.find();
        if (candidates.length === 0) {
            return res.status(404).json({ message: 'No scout candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching scout candidates' });
    }
};

module.exports = { addScoutCandidate, deleteScoutCandidate, getAllScoutCandidates };
