import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './App.css'; // Assuming you'll add styling here

function RescheduleAppointment() {
  const navigate = useNavigate(); // To handle redirection after form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // After form validation or processing, redirect to SuccessAppointment
    navigate('/success_reschedule');
  };

  return (
    <div className="reschedule-appointment">
      {/* Back button and header */}
      <div className="greeting-container3">
        <Link to="/schedule_info" className="arrow-button1">{'<'}</Link>
        <h2>Reschedule information</h2>
      </div>

      {/* Appointment form */}
      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>
          Dr. Name: Dr.Chris
        </label>

        <label>
          Preferred Date:
          <input type="date" name="date" required />
        </label>

        <label>
          Preferred Time:
          <input type="time" name="time" required />
        </label>

        <label className='label1'>
          Location:
          <textarea name="comments" rows="4" className="textarea-location"></textarea>
        </label>

        <button type="submit" className="submit-button">CONFIRM APPOINTMENT</button>
      </form>
    </div>
  );
}

export default RescheduleAppointment;
