const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Import routes
const StudentsRoutes = require('./router/StudentsRouter'); // Ensure this path is correct

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/students', StudentsRoutes); // Ensure this line is present

// Export the app
module.exports = app;
