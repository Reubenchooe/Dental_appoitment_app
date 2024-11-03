import React from 'react';
import dentist4Pic from './assets/images/dentist 4.jpg'; 
import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.css';

function DoctorInfo() {
  return (
    <div>
      <div className='doctor_info'>
      <div className="greeting-container3">
      <Link to="/home" className="arrow-button1">{'<'}</Link>
      <h2>Doctor information</h2>
      </div>
      <img src={dentist4Pic} alt="Profile" className="profile-pic1" />
      <h2>Dr.Micheal</h2>
      <p className="doctor-description">
  Dr. Michael Carter is a highly experienced dentist specializing in cosmetic dentistry and orthodontics. 
  With over 12 years of practice, he is known for his gentle approach and commitment to delivering the highest quality dental care. 
  He completed his Doctor of Dental Surgery (DDS) degree from Columbia University College of Dental Medicine and has since continued to enhance his skills by attending various workshops and seminars.
  Dr. Carter believes in the importance of patient education, making sure that his patients understand their treatment options thoroughly. 
  His friendly and welcoming demeanor helps create a relaxed environment for patients of all ages.
</p>
      <Link to="/make_appointment" className="appointment-button">
        MAKE APPOINTMENT
      </Link>
      </div>
    </div>
  );
}

export default DoctorInfo;
