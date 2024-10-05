const mongoose = require('mongoose');

const artsCandidateSchema = new mongoose.Schema({
    candidate_id: { type: String, required: true, unique: true },   // Unique identifier for the candidate
    candidate_name: { type: String, required: true },               // Candidate's full name
    candidate_faculty: { type: String, required: true },            // Faculty of the candidate
    candidate_level: { type: String, required: true },              // Academic level (e.g., 1st year, 2nd year)
    candidate_location: { type: String },                           // Optional location of the candidate
    candidate_number: { type: String, required: true },             // Student number or ID
    club_name: { type: String, required: true },                    // Club or society they are running for
    candidate_bio: { type: String },                                // Optional biography or candidate's statement
    campaign_poster: { type: String },                              // URL or path to a campaign poster image
});

const ArtsCandidate = mongoose.model('ArtsCandidate', artsCandidateSchema);

module.exports = { ArtsCandidate };
