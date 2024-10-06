require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();

// Import routes
const StudentsRoutes = require('../router/StudentsRouter'); // Importing the students router

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/students', StudentsRoutes); // Adding the students routes

// CORS OPTIONS preflight handler
app.options('/students', cors()); // Changed from '/auth/signup' to '/students' to match the context

// Export the app for serverless deployment
module.exports = app;
