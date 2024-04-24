const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  staff: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0
  },
  work: {
    type: String,
    required: true,
    enum: ["cleaning", "serving", "guard", "receptionist"] // corrected typo
  },
  salary: { // corrected typo
    type: Number,
    required: true
  }
});

const Staff = mongoose.model('hotelStaff', staffSchema); // corrected typo and capitalized model name
module.exports = Staff;
