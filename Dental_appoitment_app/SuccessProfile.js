import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Create this CSS file

const SuccessProfile = () => {
  return (
    <div className="success-profile">
     <Link to="/profile">
        <button className="back-home-button">X</button>
      </Link>
      <h1>SUCCESS</h1>
      <p>Your profile has been updated.<br /> Thank you.</p>
    </div>
  );
};

export default SuccessProfile;
