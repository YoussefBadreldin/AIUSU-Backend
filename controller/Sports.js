const { SportsCandidate } = require('../models/Sports'); 

// Add a new sports candidate
const addSportsCandidate = async function(req, res) {
    try {
        const {
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        } = req.body;

        const newCandidate = new SportsCandidate({
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        });

        await newCandidate.save();
        res.status(200).json({ message: 'Sports candidate added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding sports candidate' });
    }
};

// Delete a sports candidate by name
const deleteSportsCandidate = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await SportsCandidate.deleteOne({ candidate_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Sports candidate deleted successfully' });
        } else {
            res.status(404).json({ message: 'Sports candidate not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting sports candidate' });
    }
};

// Get all sports candidates
const getAllSportsCandidates = async function(req, res) {
    try {
        const candidates = await SportsCandidate.find();
        if (candidates.length === 0) {
            return res.status(404).json({ message: 'No sports candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching sports candidates' });
    }
};

module.exports = { addSportsCandidate, deleteSportsCandidate, getAllSportsCandidates };
