const ClubsModel = require('../models/ClubsModel');

const addClubs = async (req, res) => {
    try {
        const { candidate_id, candidate_name, candidate_faculty, candidate_level } = req.body;
        const newClub = new ClubsModel({ candidate_id, candidate_name, candidate_faculty, candidate_level });
        await newClub.save();
        return res.status(200).json({ message: 'Club candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getClubs = async (req, res) => {
    try {
        const clubs = await ClubsModel.find();
        if (clubs.length === 0) {
            return res.status(404).json({ message: 'No clubs found' });
        }
        return res.status(200).json(clubs);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addClubs, getClubs };
