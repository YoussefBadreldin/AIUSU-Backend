require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const routes = {
    students: require('../router/StudentsRouter'),
    members: require('./router/MembersRouter'),
    clubs: require('../router/ClubsRouter'),
    sports: require('../router/SportsRouter'),
    cultural: require('../router/CulturalRouter'),
    social: require('../router/SocialRouter'),
    scout: require('../router/ScoutRouter'),
    scientific: require('../router/ScientificRouter'),
    arts: require('../router/ArtsRouter'),
};

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
Object.entries(routes).forEach(([key, router]) => {
    app.use(`/${key}`, router);
});

// Start the server
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app for serverless deployment
module.exports = app;
