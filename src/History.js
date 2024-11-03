import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Assuming you style it here

function History() {
  const appointments = [
    {
      doctor: 'Dr.Chris',
      date: '2024-10-01',
      time: '10:00 AM',
      status: 'Completed'
    },
    {
      doctor: 'Dr.Andrew',
      date: '2024-09-15',
      time: '2:00 PM',
      status: 'Cancelled'
    }
  ];

  return (
    <div className="history">
      <div className="greeting-container3">
      <Link to="/profile" className="arrow-button1">{'<'}</Link>
        <h2>History</h2>
      </div>

      <div className="history-list">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-card">
            <p><strong>Doctor:</strong> {appointment.doctor}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <p><strong>Status:</strong> {appointment.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
