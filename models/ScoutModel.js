const mongoose = require('mongoose');

const ScoutSchema = new mongoose.Schema({
    candidate_id: { type: String, required: true, unique: true },
    candidate_name: { type: String, required: true },
    candidate_faculty: { type: String, required: true },
    candidate_level: { type: String, required: true },
});

const ScoutModel = mongoose.model('Scout', ScoutSchema);
module.exports = ScoutModel;
