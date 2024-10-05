const { Student } = require('../models/Students');

// Add a new student
const addStudent = async function(req, res) {
    try {
        const {
            student_id,
            student_name,
            student_faculty,
            student_level,
            student_location,
            student_number,
        } = req.body;

        const newStudent = new Student({
            student_id,
            student_name,
            student_faculty,
            student_level,
            student_location,
            student_number,
        });

        await newStudent.save();
        res.status(200).json({ message: 'Student added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding student' });
    }
};

// Delete a student by name
const deleteStudent = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await Student.deleteOne({ student_name: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Student deleted successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting student' });
    }
};

// Get all students
const getAllStudents = async function(req, res) {
    try {
        const students = await Student.find();
        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }
        res.status(200).json({ students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching students' });
    }
};

module.exports = { addStudent, deleteStudent, getAllStudents };
