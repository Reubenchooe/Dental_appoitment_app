import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import profilePic from './assets/images/Profile.jpeg'; 
import dentist1Pic from './assets/images/dentist 1.jpg'; 
import dentist2Pic from './assets/images/dentist 2.jpg'; 
import dentist3Pic from './assets/images/dentist 3.jpg'; 
import dentist4Pic from './assets/images/dentist 4.jpg'; 

function Home() {
  return (
    <div className="Home">
    <div className="greeting-container">
      <h1>
        Hi,<br />Mr. Lim 
      </h1>
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>

    <div className="card">
          <div className="greeting-container1">
            <img src={dentist1Pic} alt="Profile" className="profile-pic" />
            <Link to="/doctor_info" className="link-style">
            <h2>Dr.Kent</h2> 
            </Link>
            <Link to="/doctor_info" className="arrow-button">{'>'}</Link>
          </div>
        </div>

        <div className="card">
          <div className="greeting-container1">
            <img src={dentist2Pic} alt="Profile" className="profile-pic" />
            <Link to="/doctor_info" className="link-style">
            <h2>Dr.Jeff</h2>
            </Link>
            <Link to="/doctor_info" className="arrow-button">{'>'}</Link>
          </div>
        </div>

        <div className="card">
          <div className="greeting-container1">
            <img src={dentist3Pic} alt="Profile" className="profile-pic" />
            <Link to="/doctor_info" className="link-style">
            <h2>Dr.Andrew</h2>
            </Link>
            <Link to="/doctor_info" className="arrow-button">{'>'}</Link>
          </div>
        </div>

        <div className="card">
          <div className="greeting-container1">
            <img src={dentist4Pic} alt="Profile" className="profile-pic" />
            <Link to="/doctor_info" className="link-style">
            <h2>Dr.Micheal</h2>
            </Link>
            <Link to="/doctor_info" className="arrow-button">{'>'}</Link>
          </div>
        </div>
    </div>
  );
}

export default Home;
