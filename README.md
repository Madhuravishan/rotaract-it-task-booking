# Rotaract IT Task Booking

A task booking application for Rotaract IT — frontend and backend written in JavaScript. This repository contains both the frontend and backend parts of the application. Both parts are deployed to Vercel.

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

## Project
This app provides booking and management features for IT tasks/events. The frontend is a JavaScript-based SPA (React/Next/Vite) and the backend is a JavaScript API (Node/Express or serverless functions). Both are deployed on Vercel for fast hosting and serverless function support.

## Tech stack
- JavaScript (frontend + backend)
- CSS / HTML for UI
- Vercel for hosting (frontend and backend)
- Optional: a database (Postgres, MongoDB, etc.) or third-party auth

## Features
- Create, view, and manage task bookings
- Authentication (JWT or provider)
- Admin panel for approvals (if implemented)
- API endpoints for booking, user, and admin operations

## Repository layout
(Adjust paths below to match your repo structure)
- /frontend — frontend application
- /backend — backend API or serverless functions
- /README.md — this file

## Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- (Optional) Vercel account & Vercel CLI for local testing

## Local setup

Clone the repo
```bash
git clone https://github.com/Madhuravishan/rotaract-it-task-booking.git
cd rotaract-it-task-booking
