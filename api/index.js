// api/index.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();

// Import routes
const StudentsRoutes = require('./router/StudentsRouter'); // Ensure this path is correct
const MembersRouter = require('./router/MembersRouter'); // Ensure this path is correct
const ClubsRouter = require('./router/ClubsRouter');
const SportsRouter = require('./router/SportsRouter');
const CulturalRouter = require('./router/CulturalRouter');
const SocialRouter = require('./router/SocialRouter');
const ScoutRouter = require('./router/ScoutRouter');
const ScientificRouter = require('./router/ScientificRouter');
const ArtsRouter = require('./router/ArtsRouter');

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/students', StudentsRoutes); // Define the base route for students
app.use('/members', MembersRouter); // Define the base route for members
app.use('/clubs', ClubsRouter); // Define the base route for clubs
app.use('/sports', SportsRouter); // Define the base route for sports
app.use('/cultural', CulturalRouter); // Define the base route for cultural
app.use('/social', SocialRouter); // Define the base route for social
app.use('/scout', ScoutRouter); // Define the base route for scout
app.use('/scientific', ScientificRouter); // Define the base route for scientific
app.use('/arts', ArtsRouter); // Define the base route for arts

// Export the app for serverless deployment
module.exports = app;
