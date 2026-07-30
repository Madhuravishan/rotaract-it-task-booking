const mongoose = require('mongoose');

// Define the rules for our Booking data
const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Removes accidental spaces before/after the name
  },
  date: {
    type: String, // We use String here for simplicity (e.g., '2026-08-03')
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: 'Meeting'
  },
  note: {
    type: String,
    trim: true
  }
}, { 
  timestamps: true // Automatically adds 'createdAt' and 'updatedAt' fields!
});

// Export the model so our controllers can use it to talk to the database
module.exports = mongoose.model('Booking', bookingSchema);