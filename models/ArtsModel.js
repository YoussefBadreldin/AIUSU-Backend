const mongoose = require('mongoose');

const ArtsSchema = new mongoose.Schema({
    candidate_id: { type: String, required: true, unique: true },
    candidate_name: { type: String, required: true },
    candidate_faculty: { type: String, required: true },
    candidate_level: { type: String, required: true },
});

const ArtsModel = mongoose.model('Arts', ArtsSchema);
module.exports = ArtsModel;
