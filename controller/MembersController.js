const MembersModel = require('../models/MembersModel');

// Add a new member
const addMember = async (req, res) => {
    try {
        const { member_id, member_name, member_faculty, member_level, member_title } = req.body;
        
        // Check if member already exists
        const existingMember = await MembersModel.findOne({ member_id });
        if (existingMember) {
            return res.status(400).json({ message: 'Member already exists' });
        }

        const newMember = new MembersModel({ 
            member_id, 
            member_name, 
            member_faculty, 
            member_level, 
            member_title 
        });
        
        await newMember.save();
        return res.status(201).json({ message: 'Member added successfully' }); // Use 201 for successful creation
    } catch (error) {
        console.error('Error adding member:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get all members
const getMembers = async (req, res) => {
    try {
        const members = await MembersModel.find();
        if (!members || members.length === 0) {
            return res.status(404).json({ message: 'No members found' });
        }
        return res.status(200).json(members);
    } catch (error) {
        console.error('Error fetching members:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addMember, getMembers };
