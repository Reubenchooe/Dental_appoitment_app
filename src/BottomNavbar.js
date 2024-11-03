import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi2";
import { PiCalendarDuotone } from "react-icons/pi";
import { FaRegUser } from 'react-icons/fa';
import './BottomNavbar.css';

function BottomNavbar() {
  return (
    <div className="bottom-navbar">
      <div className="nav-item1">
      <NavLink
      to="/home"
      className="nav-link1"
      activeClassName="active-link1" // This class will be applied when this link is active
    >
          <HiOutlineHome className="icon" />
          {/* <p>Home</p> */}
        </NavLink>
      </div>
      <div className="nav-item2">
      <NavLink
      to="/upcoming_appointment"
      className="nav-link2"
      activeClassName="active-link2" // This class will be applied when this link is active
    >
          <PiCalendarDuotone className="icon" />
          {/* <p>Calendar</p> */}
        </NavLink>
      </div>
      <div className="nav-item3">
      <NavLink
      to="/profile"
      className="nav-link3"
      activeClassName="active-link3" // This class will be applied when this link is active
    >
          <FaRegUser className="icon" />
          {/* <p>Profile</p> */}
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNavbar;
