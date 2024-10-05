const mongoose = require('mongoose');

const clubCandidateSchema = new mongoose.Schema({
    candidate_id: { type: String, required: true, unique: true },  // Unique identifier for the candidate
    candidate_name: { type: String, required: true },               // Name of the candidate
    candidate_faculty: { type: String, required: true },            // Faculty of the candidate
    candidate_level: { type: String, required: true },              // Academic level (e.g., year of study)
    candidate_location: { type: String },                            // Location of the candidate
    candidate_number: { type: String, required: true },             // Student number or ID
    club_name: { type: String, required: true },                    // Name of the club they are running for
    candidate_bio: { type: String },                                 // Optional biography or statement
    campaign_poster: { type: String },                               // URL or path to a campaign poster image
});

const ClubCandidate = mongoose.model('ClubCandidate', clubCandidateSchema);

module.exports = { ClubCandidate };
