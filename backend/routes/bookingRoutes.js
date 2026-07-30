const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');

// When a POST request hits /api/bookings, run createBooking function
router.post('/', createBooking);

// When a GET request hits /api/bookings, run getBookings function
router.get('/', getBookings);

module.exports = router;