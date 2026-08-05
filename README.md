# Rotaract IT Task Booking

A task booking application for Rotaract IT — frontend and backend written in JavaScript. This repository contains both the frontend and backend parts of the application. Both parts are deployed to Vercel.

## Table of contents
- [Project](#project)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Repository layout](#repository-layout)
- [Prerequisites](#prerequisites)
- [Local setup](#local-setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Environment variables](#environment-variables)
- [Deployment to Vercel](#deployment-to-vercel)
  - [Separate projects (recommended)](#separate-projects-recommended)
  - [Monorepo setup](#monorepo-setup)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License & contact](#license--contact)

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