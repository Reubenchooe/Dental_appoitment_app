import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import dentist3Pic from './assets/images/dentist 3.jpg'; 
import dentist4Pic from './assets/images/dentist 4.jpg';
import dentist5Pic from './assets/images/dentist 5.jpg';    

function UpdatedUpcoming() {
  return (
    <div className="upcoming-appointments">
      <div className="greeting-container2">
      <h2>Upcoming Schedule</h2>
      </div>

      <div className='card'>
          <div className="greeting-container1">
            <img src={dentist4Pic} alt="Profile" className="profile-pic" />
            <div className="doctor-info">
            <Link to="/schedule_info" className="link-style">
            <h2>Dr.Micheal</h2>
            <p className="appointment-date">11 November 2024</p>
            </Link>
            </div>
            <Link to="/updated_schedule" className="arrow-button">{'>'}</Link>
          </div>
      </div>

      <div className='card'>
          <div className="greeting-container1">
            <img src={dentist5Pic} alt="Profile" className="profile-pic" />
            <div className="doctor-info">
            <Link to="/schedule_info" className="link-style">
            <h2>Dr.Chris</h2>
            <p className="appointment-date">25 November 2024</p>
            </Link>
            </div>
            <Link to="/updated_schedule" className="arrow-button">{'>'}</Link>
          </div>
      </div>

      <div className='card'>
          <div className="greeting-container1">
            <img src={dentist3Pic} alt="Profile" className="profile-pic" />
            <div className="doctor-info">
            <Link to="/schedule_info" className="link-style">
            <h2>Dr.Andrew</h2>
            <p className="appointment-date">25 December 2024</p>
            </Link>
            </div>
            <Link to="/schedule_info" className="arrow-button">{'>'}</Link>
          </div>
      </div>
        
    </div>
  );
}

export default UpdatedUpcoming;
