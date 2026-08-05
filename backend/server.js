const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bookingRoutes = require('./routes/bookingRoutes'); // Import the routes

const app = express();

app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB Database'))
    .catch((err) => console.error('❌ MongoDB Connection Error: ', err));
} else {
  console.error('❌ MONGO_URI is missing in environment variables');
}

// Route API requests
app.use('/api/bookings', bookingRoutes);

// Root test route to verify server health
app.get('/api', (req, res) => {
  res.json({ message: 'Backend API is running on Vercel!' });
});

// Only start the port listener when running locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export Express app for Vercel Serverless Functions
module.exports = app;