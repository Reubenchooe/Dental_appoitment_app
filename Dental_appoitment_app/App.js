import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UpcomingAppointment from './UpcomingAppointment'; // Ensure the filename matches
import Profile from './Profile';
import BottomNavbar from './BottomNavbar';
import DoctorInfo from './DoctorInfo'; // Only one import here
import MakeAppointment from './MakeAppointment'; 
import SuccessAppointment from './SuccessAppointment';
import ScheduleInfo from './ScheduleInfo';
import Cancel from './Cancel';
import RescheduleAppointment from './RescheduleAppointment';
import SuccessReschedule from './SuccessReschedule';
import UpdatedUpcoming from './UpdatedUpcoming';
import UpdatedSchedule from './UpdatedSchedule';
import EditProfile from './EditProfile';
import SuccessProfile from './SuccessProfile';
import History from './History'
import './App.css'; // Your styling file

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/upcoming_appointment" element={<UpcomingAppointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/doctor_info" element={<DoctorInfo />} /> {/* Only once */}
          <Route path="/make_appointment" element={<MakeAppointment />} /> {/* New Route */}
          <Route path="/success_appointment" element={<SuccessAppointment/>} />
          <Route path="/schedule_info" element={<ScheduleInfo/>} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/reschedule_appointment" element={<RescheduleAppointment />} />
          <Route path="/success_reschedule" element={<SuccessReschedule />} />
          <Route path="/updated_upcoming" element={<UpdatedUpcoming />} />
          <Route path='/updated_schedule' element={<UpdatedSchedule/>}  />
          <Route path='/edit_profile' element={<EditProfile/>}  />
          <Route path='/success_profile' element={<SuccessProfile/>}  />
          <Route path='/history' element={<History/>}  />
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Bottom Navbar */}
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
