const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL_local=process.env.mongoURL_local;  // local server connected
const mongoURL=process.env.mongoURL;  //online server connected

// Setup MongoDB for online server

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// // Setup MongoDB for local server
// mongoose.connect(mongoURL_local, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

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
