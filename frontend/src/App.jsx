import React from 'react';
import BookingForm from './components/BookingForm';
import BookingsList from './components/BookingsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Time Slot Booking
      </h1>
      <p className="text-gray-600 mb-8">IT Avenue Recruitment Task</p>
      
      <div className="w-full flex flex-col items-center gap-8">
        <BookingForm />
        <BookingsList />
      </div>
      
    </div>
  );
}

export default App;