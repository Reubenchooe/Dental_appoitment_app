import React from 'react';
import { IoMdTime } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import dentist5Pic from './assets/images/dentist 5.jpg';   
import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.css';

function ScheduleInfo() {
  return (
    <div>
      <div className='schedule_info'>
      <div className="greeting-container3">
      <Link to="/upcoming_appointment" className="arrow-button1">{'<'}</Link>
      <h2>Schedule information</h2>
      </div>
      <img src={dentist5Pic} alt="Profile" className="profile-pic1" />
      <h2>Dr.Chris</h2>
      <div className="icon-row">
        <div className="icon-text-container">
            <IoMdTime className="icon" />
            <span>11:00 AM</span> {/* Text next to the time icon */}
        </div>
        <div className="icon-text-container">
            <LuCalendar className="icon" />
            <span>12 November 2024</span> {/* Text next to the calendar icon */}
        </div>
        <div className="icon-text-container">
            <IoLocationOutline className="icon" />
            <span>Georgetown penang</span> {/* Text next to the location icon */}
        </div>
      </div>
      <div className="button-container1">
        <Link to="/cancel" className="appointment-button1">
            CANCEL
        </Link>
        <Link to="/reschedule_appointment" className="appointment-button1">
            RESCHEDULE
        </Link>
      </div>
      </div>
    </div>
  );
}

export default ScheduleInfo;
