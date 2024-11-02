import React from 'react';
import { Link,} from 'react-router-dom';
import profilePic from './assets/images/Profile.jpeg'; 

function Profile() {
  return (
    <div>
      <div className='Profile'>
      <div className="greeting-container2">
      <h2>Profile Page</h2>
      </div>
      <img src={profilePic} alt="Profile" className="profile-pic1" />
      <h2>Lim</h2>

      <div className="button-container">
      <Link to="/edit_profile">
       <button className="profile-button">Edit Profile</button>
       </Link>
      </div>

      <div className="button-container">
      <Link to="/history">
       <button className="profile-button">History</button> 
       </Link>
      </div>

      </div>
    </div>
  );
}

export default Profile;
