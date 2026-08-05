# Rotaract IT Task - Time Slot Booking App

A full-stack web application built for time-slot booking and recruitment coordination. The project is structured as a monorepo consisting of a React (Vite) frontend and an Express serverless backend connected to MongoDB Atlas, both deployed seamlessly on Vercel.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** React.js (Bootstrapped with Vite)
* **Styling:** CSS / Tailwind CSS

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas (Mongoose ORM)
* **Hosting:** Vercel Serverless Functions

---

## 📂 Repository Structure

```text
booking-app/
├── backend/
│   ├── routes/
│   │   └── bookingRoutes.js
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── vercel.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── BookingForm.jsx
    │   │   └── BookingsList.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js


```

---

## 🚀 Getting Started Locally

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and database URI

### 1. Clone the Repository

```bash
git clone [https://github.com/Madhuravishan/rotaract-it-task-booking.git](https://github.com/Madhuravishan/rotaract-it-task-booking.git)
cd rotaract-it-task-booking

```

### 2. Backend Setup

```bash
cd backend
npm install

```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/booking-app?retryWrites=true&w=majority

```

Run the backend server:

```bash
npm start

```

### 3. Frontend Setup

Open a new terminal tab:

```bash
cd frontend
npm install

```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api/bookings

```

Run the development server:

```bash
npm run dev

```

---

## 🌐 Deployment Configuration (Vercel)

This project is deployed as two separate services on Vercel:

### Backend Project (`rotaract-booking-backend`)

* **Root Directory:** `backend`
* **Environment Variables:**
* `MONGO_URI`: Your full MongoDB Atlas connection string.


* **Serverless Configuration (`backend/vercel.json`):**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}

```

### Frontend Project (`rotaract-booking-frontend`)

* **Framework Preset:** `Vite`
* **Root Directory:** `frontend`
* **Environment Variables:**
* `VITE_API_URL`: `https://rotaract-booking-backend.vercel.app/api/bookings`



---

## 📡 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| **GET** | `/api/bookings` | Fetch all scheduled time slot bookings |
| **POST** | `/api/bookings` | Create a new time slot booking |

---

## 📝 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

```

```
