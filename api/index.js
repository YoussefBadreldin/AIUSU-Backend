require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const StudentsRouter = require('../router/StudentsRouter');
const ClubsRouter = require('../router/ClubsRouter');
const SportsRouter = require('../router/SportsRouter');
const CulturalRouter = require('../router/CulturalRouter');
const SocialRouter = require('../router/SocialRouter');
const ScoutRouter = require('../router/ScoutRouter');
const ScientificRouter = require('../router/ScientificRouter');
const ArtsRouter = require('../router/ArtsRouter');

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/students', StudentsRouter);
app.use('/clubs', ClubsRouter);
app.use('/sports', SportsRouter);
app.use('/cultural', CulturalRouter);
app.use('/social', SocialRouter);
app.use('/scout', ScoutRouter);
app.use('/scientific', ScientificRouter);
app.use('/arts', ArtsRouter);

// Start the server
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app for serverless deployment
module.exports = app;