import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './App.css'; // Assuming you'll add styling here

function MakeAppointment() {
  const navigate = useNavigate(); // To handle redirection after form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // After form validation or processing, redirect to SuccessAppointment
    navigate('/success_appointment');
  };

  return (
    <div className="make-appointment">
      {/* Back button and header */}
      <div className="greeting-container3">
        <Link to="/doctor_info" className="arrow-button1">{'<'}</Link>
        <h2>Appointment information</h2>
      </div>

      {/* Appointment form */}
      <form className="appointment-form" onSubmit={handleSubmit}>
      <label>
        Dr. name:
        <select class="doctor" required>
          <option value="" disabled>Select a Doctor</option>
          <option value="dr_smith">Dr. Micheal</option>
          <option value="dr_jones">Dr. Kent</option>
          <option value="dr_carter">Dr. Jeff</option>
          <option value="dr_carter">Dr. Andrew</option>
        </select>
      </label>
         
        <label>
          patient name:
          <input type="text" name="name" required />
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

export default MakeAppointment;
