const express = require('express');
const StudentsController = require('../controller/StudentsController');

const router = express.Router();

// Route to add a new student
router.post('/add', StudentsController.addStudent);

// Route to get all students
router.get('/', StudentsController.getStudents); // Ensure this route is defined correctly

module.exports = router;
