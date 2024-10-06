require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/students', studentsRouter);
app.use('/clubs', clubsRouter);
app.use('/sports', sportsRouter);
app.use('/arts', artsRouter);
app.use('/cultural', culturalRouter);
app.use('/scientific', scientificRouter);
app.use('/scout', scoutRouter);
app.use('/social', socialRouter);

// Define a port for the server
const PORT = process.env.PORT || 3000; // Default to port 3000 if not defined in environment variables

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Export the app for serverless deployment or further use
module.exports = app;
