import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Create this CSS file

const SuccessAppointment = () => {
  return (
    <div className="success-appointment">
     <Link to="/upcoming_appointment">
        <button className="back-home-button">X</button>
      </Link>
      <h1>SUCCESS</h1>
      <p>Your appointment has been booked.<br /> We look forward to seeing you.</p>
    </div>
  );
};

export default SuccessAppointment;
