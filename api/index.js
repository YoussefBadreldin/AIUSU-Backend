// api/index.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const connectToDatabase = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    }
};

// Import routes
const StudentsRoutes = require('./router/StudentsRouter'); 
const MembersRouter = require('./router/MembersRouter'); 
const ClubsRouter = require('./router/ClubsRouter');
const SportsRouter = require('./router/SportsRouter');
const CulturalRouter = require('./router/CulturalRouter');
const SocialRouter = require('./router/SocialRouter');
const ScoutRouter = require('./router/ScoutRouter');
const ScientificRouter = require('./router/ScientificRouter');
const ArtsRouter = require('./router/ArtsRouter');

// Connect to database before defining routes
app.use(async (req, res, next) => {
    await connectToDatabase();
    next();
});

// Routes
app.use('/students', StudentsRoutes);
app.use('/members', MembersRouter);
app.use('/clubs', ClubsRouter);
app.use('/sports', SportsRouter);
app.use('/cultural', CulturalRouter);
app.use('/social', SocialRouter);
app.use('/scout', ScoutRouter);
app.use('/scientific', ScientificRouter);
app.use('/arts', ArtsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Export the app for serverless deployment
module.exports = app;
