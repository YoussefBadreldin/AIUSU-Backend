const MembersModel = require('../models/MembersModel');

const addMember = async (req, res) => {
    try {
        const { member_id, member_name, member_faculty, member_level, member_title } = req.body;
        const newMember = new MembersModel({ member_id, member_name, member_faculty, member_level, member_title });
        await newMember.save();
        return res.status(200).json({ message: 'Member added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getMembers = async (req, res) => {
    try {
        const members = await MembersModel.find();
        if (members.length === 0) {
            return res.status(404).json({ message: 'No members found' });
        }
        return res.status(200).json(members);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addMember, getMembers };
