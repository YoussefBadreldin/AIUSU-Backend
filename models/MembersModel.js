const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
    member_id: { type: String, required: true, unique: true },
    member_name: { type: String, required: true },
    member_faculty: { type: String, required: true },
    member_level: { type: String, required: true },
    member_title: { type: String, required: true },
}, { timestamps: true });  // Adding timestamps to track creation and updates

const MembersModel = mongoose.model('Members', MembersSchema);
module.exports = MembersModel;
