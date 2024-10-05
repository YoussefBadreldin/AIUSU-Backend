const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
    student_name: { type: String, required: true },
    student_faculty: { type: String, required: true },
    student_id: { type: String, required: true, unique: true },
    student_level: { type: String, required: true },
    student_location: { type: String, required: true },
    student_number: { type: String, required: true, unique: true },
});

// Create the student model
const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };
