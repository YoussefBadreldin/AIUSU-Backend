require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const StudentsModel = require('../models/StudentsModel');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Function to add a new student
app.post('/students/add', async (req, res) => {
    try {
        const { student_id, student_name, student_faculty, student_level, student_location, student_number } = req.body;
        const newStudent = new StudentsModel({ student_id, student_name, student_faculty, student_level, student_location, student_number });
        await newStudent.save();
        return res.status(200).json({ message: 'Student added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Function to get all students
app.get('/students', async (req, res) => {
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
});

// Export the app for serverless deployment (Vercel)
module.exports = app;
