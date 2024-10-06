const ArtsModel = require('../models/ArtsModel');

const addArts = async (req, res) => {
    try {
        const { candidate_id, candidate_name, candidate_faculty, candidate_level } = req.body;
        const newArts = new ArtsModel({ candidate_id, candidate_name, candidate_faculty, candidate_level });
        await newArts.save();
        return res.status(200).json({ message: 'Arts candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getArts = async (req, res) => {
    try {
        const arts = await ArtsModel.find();
        if (arts.length === 0) {
            return res.status(404).json({ message: 'No arts found' });
        }
        return res.status(200).json(arts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addArts, getArts };
