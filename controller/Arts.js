const { ArtsCandidate } = require('../models/Arts');

// Add a new arts candidate
const addArtsCandidate = async (req, res) => {
    try {
        const {
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        } = req.body;

        // Check if candidate already exists
        const existingCandidate = await ArtsCandidate.findOne({ candidate_id });
        if (existingCandidate) {
            return res.status(400).json({ message: 'Candidate already exists' });
        }

        const newCandidate = new ArtsCandidate({
            candidate_id,
            candidate_name,
            candidate_faculty,
            candidate_level,
        });

        await newCandidate.save();
        res.status(201).json({ message: 'Arts candidate added successfully' });
    } catch (error) {
        console.error('Error adding arts candidate:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete an arts candidate by name
const deleteArtsCandidate = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await ArtsCandidate.deleteOne({ candidate_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Arts candidate deleted successfully' });
        } else {
            res.status(404).json({ message: 'Arts candidate not found' });
        }
    } catch (error) {
        console.error('Error deleting arts candidate:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all arts candidates
const getAllArtsCandidates = async (req, res) => {
    try {
        const candidates = await ArtsCandidate.find();
        if (candidates.length === 0) {
            return res.status(404).json({ message: 'No arts candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        console.error('Error fetching arts candidates:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { addArtsCandidate, deleteArtsCandidate, getAllArtsCandidates };
