const StudentsModel = require('../models/StudentsModel');

// Function to add a new student
const addStudent = async (req, res) => {
    try {
        const { student_id, student_name, student_faculty, student_level, student_location, student_number } = req.body;
        const newStudent = new StudentsModel({ student_id, student_name, student_faculty, student_level, student_location, student_number });
        await newStudent.save();
        return res.status(200).json({ message: 'Student added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Function to get all students
const getStudents = async (req, res) => {
    try {
        const students = await StudentsModel.find(); // Fetch all students
        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }
        return res.status(200).json(students); // Return students
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addStudent, getStudents }; // Export the functions
