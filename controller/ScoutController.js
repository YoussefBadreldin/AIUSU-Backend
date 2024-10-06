const ScoutModel = require('../models/ScoutModel');

const addScout = async (req, res) => {
    try {
        const { candidate_id, candidate_name, candidate_faculty, candidate_level } = req.body;
        const newScout = new ScoutModel({ candidate_id, candidate_name, candidate_faculty, candidate_level });
        await newScout.save();
        return res.status(200).json({ message: 'Scout candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getScout = async (req, res) => {
    try {
        const scout = await ScoutModel.find();
        if (scout.length === 0) {
            return res.status(404).json({ message: 'No scout candidates found' });
        }
        return res.status(200).json(scout);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addScout, getScout };
