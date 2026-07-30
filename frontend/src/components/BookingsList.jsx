import React, { useEffect, useState } from 'react';

// Vite uses import.meta.env to read environment variables.
// If the variable doesn't exist (like on our laptop), it falls back to localhost.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/bookings';

export default function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // ✅ Now using the dynamic API_URL
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch from server');
        return res.json();
      })
      .then((data) => setBookings(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Already Booked Slots</h2>
      
      {error && <p className="text-red-500">{error}</p>}
      
      {bookings.length === 0 && !error ? (
        <p className="text-gray-500">No bookings yet. All slots are available!</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {bookings.map((booking) => (
            <li key={booking._id} className="border p-3 rounded bg-gray-50">
              <p className="font-bold">{booking.name}</p>
              <p className="text-sm text-gray-600">{booking.date} | {booking.timeSlot}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}