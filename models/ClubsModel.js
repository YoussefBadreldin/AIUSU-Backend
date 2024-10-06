const mongoose = require('mongoose');

const ClubsSchema = new mongoose.Schema({
    candidate_id: { type: String, required: true, unique: true },
    candidate_name: { type: String, required: true },
    candidate_faculty: { type: String, required: true },
    candidate_level: { type: String, required: true },
});

const ClubsModel = mongoose.model('Clubs', ClubsSchema);
module.exports = ClubsModel;
