const CulturalModel = require('../models/CulturalModel');

const addCultural = async (req, res) => {
    try {
        const { candidate_id, candidate_name, candidate_faculty, candidate_level } = req.body;
        const newCultural = new CulturalModel({ candidate_id, candidate_name, candidate_faculty, candidate_level });
        await newCultural.save();
        return res.status(200).json({ message: 'Cultural candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getCultural = async (req, res) => {
    try {
        const cultural = await CulturalModel.find();
        if (cultural.length === 0) {
            return res.status(404).json({ message: 'No cultural candidates found' });
        }
        return res.status(200).json(cultural);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addCultural, getCultural };
