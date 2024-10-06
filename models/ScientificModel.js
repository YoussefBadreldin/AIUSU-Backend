const mongoose = require('mongoose');

const ScientificSchema = new mongoose.Schema({
    candidate_id: { type: String, required: true, unique: true },
    candidate_name: { type: String, required: true },
    candidate_faculty: { type: String, required: true },
    candidate_level: { type: String, required: true },
});

const ScientificModel = mongoose.model('Scientific', ScientificSchema);
module.exports = ScientificModel;
