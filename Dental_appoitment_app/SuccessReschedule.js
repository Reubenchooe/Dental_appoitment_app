import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Create this CSS file

const SuccessReschedule = () => {
  return (
    <div className="success-reschedule">
     <Link to="/updated_upcoming">
        <button className="back-home-button">X</button>
      </Link>
      <h1>SUCCESS</h1>
      <p>Your appointment has been reschedule.<br /> We look forward to seeing you.</p>
    </div>
  );
};

export default SuccessReschedule;
