# Doctor Appointment Booking System 🏥

A full-stack web application for booking and managing doctor appointments online.  
Built using **MERN stack (MongoDB, Express.js, React, Node.js)** with three main folders:  

- **frontend/** → Patient-facing website for booking appointments  
- **admin/** → Admin & Doctor dashboards (doctor page + admin page to manage appointments, doctors, and patients)  
- **backend/** → REST API built with Node.js, Express, and MongoDB  

---

## 🚀 Features

### 👨‍⚕️ Doctor Panel
- Doctor login & authentication  
- Manage profile (fees, address, availability, etc.)  
- View and manage appointments  
- Track patients  

### 🧑 Patient Panel (Frontend)
- Register & login  
- Browse doctors by specialty  
- Book and cancel appointments  
- Online payments via Razorpay  

### 🛡️ Admin Panel
- Admin login  
- Manage doctors (approve, update, or remove)  
- Manage patients & appointments  
- Track system-wide analytics  

---

## 🛠️ Tech Stack
- **Frontend (patients):** React, Tailwind CSS, Axios  
- **Admin & Doctor panel:** React (separate admin folder), Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** JWT  
- **Payments:** Razorpay  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/shashank0000000/doctor-appointment-booking.git
cd doctor-appointment-booking
```
### 2. Install Dependencies
```bash
For backend:
cd backend
npm install

For frontend:
cd frontend
npm install

For admin panel:
cd admin
npm install
```
### 3. Configure environment variables
```bash
Create .env in backend with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Create .env in frontend and admin with:
REACT_APP_BACKEND_URL=http://localhost:5000
```
### 4. Run the project
```bash
Start backend:
cd backend
npm run dev

Start frontend:
cd frontend
npm start

Start admin panel:
cd admin
npm start
```