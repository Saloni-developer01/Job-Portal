# 🚀 Frontend Developer Intern Assignment: Job Portal Application

**Candidate:** Saloni Yadav
**Assignment Theme:** Full-Stack Web App with Authentication & Dashboard (MERN Stack)

---

## 💡 Project Overview

This is a **Scalable Job Portal Application** built using the MERN stack (MongoDB, Express, React, Node.js). The primary focus of this project is to demonstrate **Frontend Engineering (React.js)**, **secure JWT-based authentication**, and **robust backend integration**.

### Key Features Implemented:

* ✅ **Full Authentication Flow:** User registration, secure login, and protected routing using JWT.
* ✅ **Dashboard:** User-specific profile display and job management features.
* ✅ **CRUD Operations:** Complete Create, Read, Update, Delete functionality for the 'Jobs' entity.
* ✅ **Security:** Industry-standard password hashing (`bcryptjs`) and secure token validation.

---

## 🛠️ Tech Stack Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend (Primary)** | **React.js** | Modern UI development and component-based architecture. |
| **Styling** | **Tailwind CSS** | Utility-first framework for fast, and scalable design. |
| **Forms/Validation**| **React Hook Form / Yup**| Efficient form handling and client-side validation. |
| **Backend** | **Node.js, Express.js** | Fast, unopinionated backend framework. |
| **Database** | **MongoDB (Mongoose)** | Flexible NoSQL database and ORM for data modeling. |
| **Security** | **JWT, bcryptjs** | Secure authentication and password storage. |

---

## ⚙️ Installation and Setup Guide

Follow these steps to run the project on your local machine:

### 1. Prerequisites

* Node.js (v18+)
* MongoDB Instance (Local or MongoDB Atlas)
* Git

### 2. Setup

```bash
# Clone the Repository
git clone https://github.com/Saloni-developer01/Job-Portal.git
cd [Repository Folder Name]

# 📁 Backend Setup
cd server/
npm install
# Create a .env file with these variables:
# MONGODB_URI="<Your MongoDB Connection String>"
# JWT_SECRET="<Enter any long secret key here>"
npm start

# 💻 Frontend Setup
cd ../client/
npm install
# Create a .env file:
# VITE_BACKEND_URL="http://localhost:5000/api/v1"
npm run dev


🔐 API Documentation and Testing

A **Postman Collection** is provided to test all Backend APIs.

* **File Name:** `JobPortal_Postman_Collection.json`
* **Location:** Find this file in the root of the repository. 