# Time Slot Booking Web Application

This is a full-stack web application built for the Rotaract Club of University of Moratuwa IT Team Recruitment. It allows users to book time slots while strictly preventing overlapping bookings.

## Technology Stack
* **Frontend:** React (Vite), Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Mongoose for Schema validation)

## Setup Instructions
To run this project locally:

1. **Clone the repository:**
   `git clone https://github.com/yourusername/rotaract-it-task-booking.git`
2. **Install dependencies:**
   * Navigate to the `backend` folder and run `npm install`.
   * Navigate to the `frontend` folder and run `npm install`.
3. **Environment Variables:**
   * In the `backend` folder, create a `.env` file and add: `MONGO_URI=your_mongodb_connection_string` and `PORT=5000`
4. **Run the Application:**
   * Open two terminals.
   * Terminal 1 (Backend): `cd backend` -> `npm run start` (or `npx nodemon server.js`)
   * Terminal 2 (Frontend): `cd frontend` -> `npm run dev`