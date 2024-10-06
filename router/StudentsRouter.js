const express = require('express');
const StudentsController = require('../controller/StudentsController');

const router = express.Router();

router.post('/add', StudentsController.addStudent);
router.get('/get', StudentsController.getStudents);

module.exports = router;
