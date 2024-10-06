const StudentsModel = require('../models/StudentsModel');

const addStudent = async (req, res) => {
    try {
        const { student_id, student_name, student_faculty, student_level, student_location, student_number } = req.body; 
        const newStudent = new StudentsModel({ student_id, student_name, student_faculty, student_level, student_location, student_number });
        await newStudent.save();
        res.status(201).json({ message: 'Student added successfully', student: newStudent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await StudentsModel.find();
        if (students.length === 0) {
            res.status(404).json({ message: 'No students found' });
        } else {
            res.status(200).json(students);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addStudent, getStudents };
