import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Create this CSS file

const Cancel = () => {
  return (
    <div className="cancel-appointment">
     <Link to="/upcoming_appointment">
        <button className="back-home-button">X</button>
      </Link>
      <h1>Cancelled</h1>
      <p>Your appointment has been cancelled. <br />Enjoy you day.</p>
    </div>
  );
};

export default Cancel;
