const express = require('express');
const router = express.Router();
const { addStudent, deleteStudent, getAllStudents } = require('../controller/Students');

// Route to add a new student
router.post('/addstudent', addStudent);

// Route to get all students
router.get('/getstudents', getAllStudents);

// Route to delete a student by name
router.delete('/deletestudent/:name', deleteStudent);

module.exports = router;
