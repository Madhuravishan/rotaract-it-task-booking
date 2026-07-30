import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    timeSlot: '',
    category: 'Meeting'
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading...');

    try {
      // ✅ CORRECT EXACT URL
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Backend caught a duplicate booking and sent a 400 error!
        throw new Error(data.message || 'Failed to book slot');
      }

      setStatus('✅ Booking successful!');
      setFormData({ name: '', date: '', timeSlot: '', category: 'Meeting' }); // Clear form
      
      // Optional: Refresh the page to show new booking in the list below
      setTimeout(() => window.location.reload(), 1000); 

    } catch (err) {
      setStatus(`❌ ${err.message}`);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book a Slot</h2>
      
      {status && <p className="mb-4 font-semibold text-red-500">{status}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Name" 
          required 
          className="border p-2 rounded"
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        
        <input 
          type="date" 
          required 
          className="border p-2 rounded"
          value={formData.date} 
          onChange={(e) => setFormData({...formData, date: e.target.value})} 
        />
        
        <select 
          required 
          className="border p-2 rounded"
          value={formData.timeSlot} 
          onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
        >
          <option value="" disabled>Select a Time Slot</option>
          <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
          <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
          <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}