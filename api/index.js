const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use built-in json parser

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

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

// Export the app as a serverless function
module.exports = (req, res) => {
    app(req, res);
};
