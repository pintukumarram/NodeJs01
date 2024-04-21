const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = 'mongodb://localhost:27017/hotels';

// const mongoURL=process.env.MONGODB_URL;
// Setup MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => { // Corrected event name from 'err' to 'error'
    console.log('MongoDB Connection error', err);
});

db.on('disconnected', () => {
    console.error('MongoDB disconnected'); // Corrected console method from console.err() to console.error()
});

// Export database connection
module.exports = db;
