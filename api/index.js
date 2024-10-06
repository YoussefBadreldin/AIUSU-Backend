const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();

// Import routes
const studentsRouter = require('./router/Students');
const clubsRouter = require('./router/Clubs');
const sportsRouter = require('./router/Sports');
const artsRouter = require('./router/Arts');
const culturalRouter = require('./router/Cultural');
const scientificRouter = require('./router/Scientific');
const scoutRouter = require('./router/Scout');
const socialRouter = require('./router/Social');

// CORS Configuration
app.use(cors({
    origin: '*', // Allow all origins, or specify certain domains
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware for parsing JSON bodies
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process if connection fails
    }
};

connectDB(); // Connect to MongoDB

// Routes
app.use('/students', studentsRouter);
app.use('/clubs', clubsRouter);
app.use('/sports', sportsRouter);
app.use('/arts', artsRouter);
app.use('/cultural', culturalRouter);
app.use('/scientific', scientificRouter);
app.use('/scout', scoutRouter);
app.use('/social', socialRouter);

// CORS OPTIONS preflight handler
app.options('/auth/signup', cors());

// Export the app for serverless deployment
module.exports = app;
