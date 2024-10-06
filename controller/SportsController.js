const SportsModel = require('../models/SportsModel');

const addSports = async (req, res) => {
    try {
        const { candidate_id, candidate_name, candidate_faculty, candidate_level } = req.body;
        const newSport = new SportsModel({ candidate_id, candidate_name, candidate_faculty, candidate_level });
        await newSport.save();
        return res.status(200).json({ message: 'Sports candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getSports = async (req, res) => {
    try {
        const sports = await SportsModel.find();
        if (sports.length === 0) {
            return res.status(404).json({ message: 'No sports candidates found' });
        }
        return res.status(200).json(sports);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addSports, getSports };
