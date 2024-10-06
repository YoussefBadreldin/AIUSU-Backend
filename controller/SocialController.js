const SocialModel = require('../models/SocialModel');

const addSocial = async (req, res) => {
    try {
        const { candidate_id, candidate_name, candidate_faculty, candidate_level } = req.body;
        const newSocial = new SocialModel({ candidate_id, candidate_name, candidate_faculty, candidate_level });
        await newSocial.save();
        return res.status(200).json({ message: 'Social candidate added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getSocial = async (req, res) => {
    try {
        const social = await SocialModel.find();
        if (social.length === 0) {
            return res.status(404).json({ message: 'No social found' });
        }
        return res.status(200).json(social);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addSocial, getSocial };
