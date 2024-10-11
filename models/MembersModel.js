const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
    member_id: { type: String, required: true, unique: true },
    member_name: { type: String, required: true },
    member_faculty: { type: String, required: true },
    member_level: { type: String, required: true },
    member_title: { type: String, required: true }
});

const MembersModel = mongoose.model('Members', MembersSchema);
module.exports = MembersModel;
