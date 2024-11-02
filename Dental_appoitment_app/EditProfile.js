import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import './App.css';

function EditProfile(){
    const navigate = useNavigate(); // To handle redirection after form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // After form validation or processing, redirect to SuccessAppointment
    navigate('/success_appointment');
  };

    return (
        <div>
          <div className='edit_profile'>
          <div className="greeting-container3">
          <Link to="/profile" className="arrow-button1">{'<'}</Link>
          <h2>Edit profile</h2>
          </div>
          <form className="appointment-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>

      <label>
        Age:
        <input type="number" name="age" required />
      </label>
         
      <label>
        Email:
        <input type="text" name="name" required />
      </label>
        
      <label>
        Telephone:
        <input type="number" name="phone" required />
      </label>
        <button type="submit" className="submit-button">UPDATE</button>
      </form>
          </div>
        </div>
    )
}

export default EditProfile;