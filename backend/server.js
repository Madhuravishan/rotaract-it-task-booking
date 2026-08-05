const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connection caching for Vercel serverless functions
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};

// Ensure database is connected before handling any route
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Your routes
const bookingRoutes = require('./routes/bookingRoutes'); // verify path
app.use('/api/bookings', bookingRoutes);

module.exports = app;