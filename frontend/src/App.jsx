import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error('Failed to fetch:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !date || !timeSlot) return;

    setLoading(true);
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, date, timeSlot }),
      });
      setName('');
      setDate('');
      setTimeSlot('');
      fetchBookings();
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Time Slot Booking</h1>
      </header>

      <div className="grid-layout">
        {/* Booking Form Card */}
        <div className="card">
          <h2>Book a Slot</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Madhura Ravishan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Select Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Select Time Slot</label>
              <select
                className="form-control"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                required
              >
                <option value="">Choose a time slot...</option>
                <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
              </select>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Confirming...' : 'Confirm Booking'}
            </button>
          </form>
        </div>

        {/* Reserved Slots Card */}
        <div className="card">
          <h2>Already Booked Slots</h2>
          <div className="slots-list">
            {bookings.length === 0 ? (
              <p style={{ color: 'var(--text-muted)' }}>No bookings yet. All slots are available!</p>
            ) : (
              bookings.map((item) => (
                <div className="slot-item" key={item._id}>
                  <div className="slot-name">
                    {item.name}
                    <span className="badge">{item.timeSlot}</span>
                  </div>
                  <div className="slot-meta">Date: {item.date}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;