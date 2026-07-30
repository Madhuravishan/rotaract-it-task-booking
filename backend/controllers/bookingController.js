const Booking = require('../models/Booking'); // Import our Schema

// Function 1: Handle creating a new booking
const createBooking = async (req, res) => {
  try {
    // 1. Extract the data sent from React
    const { name, date, timeSlot, category, note } = req.body;

    // 2. THE 20-MARK LOGIC: Check for existing booking
    const existingBooking = await Booking.findOne({ date: date, timeSlot: timeSlot });
    
    if (existingBooking) {
      // Stop execution and return an error
      return res.status(400).json({ message: 'Error: This time slot is already booked.' });
    }

    // 3. If it's free, create the new booking
    const newBooking = new Booking({ name, date, timeSlot, category, note });
    
    // 4. Save it to MongoDB
    await newBooking.save();

    // 5. Send success response
    res.status(201).json({ message: 'Booking successful!', booking: newBooking });
    
  } catch (error) {
    // Catch any server/database crashes
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Function 2: Handle getting all bookings (so React can display them)
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetches all documents
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createBooking, getBookings };