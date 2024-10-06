const ScientificModel = require('../models/ScientificModel');

const addScientific = async (req, res) => {
    try {
        const { candidate_id, candidate_name, candidate_faculty, candidate_level } = req.body;
        const newScientific = new ScientificModel({ candidate_id, candidate_name, candidate_faculty, candidate_level });
        await newScientific.save();
        return res.status(200).json({ message: 'Scientific candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getScientific = async (req, res) => {
    try {
        const scientific = await ScientificModel.find();
        if (scientific.length === 0) {
            return res.status(404).json({ message: 'No scientific candidates found' });
        }
        return res.status(200).json(scientific);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addScientific, getScientific };
