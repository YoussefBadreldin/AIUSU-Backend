const mongoose = require('mongoose'); 

const StudentsSchema = new mongoose.Schema({
    student_id: { type: String, required: true, unique: true },
    student_name: { type: String, required: true },
    student_faculty: { type: String, required: true },
    student_level: { type: String, required: true },
    student_location: { type: String, required: true },
    student_number: { type: String, required: true, unique: true },
});

const StudentsModel = mongoose.model('Students', StudentsSchema);
module.exports = StudentsModel;
