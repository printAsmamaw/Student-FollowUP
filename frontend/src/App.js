import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import StudentHomePage from "./Pages/Students/StudentHomePage";
import ChatBody from "./Pages/Students/Chat/chatBody/ChatBody";
import Check from "./Pages/Check";
import Attendance from "./Pages/Students/Attendance/Attendance";
import TeachersHomePage from "./Pages/Teachers/TeachesHomePages";
import Teachera from "./Pages/Teachers/Attendance/Attendance";
import AddQuestionForm from "./Pages/Teachers/AddQuestionForm"
import OnlineTest from './Pages/OnlineTest';

function App() {
  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from local storage
    const handleBeforeUnload = async (event) => {
      console.log('User is leaving the page');
      event.preventDefault();
      event.returnValue = '';
      if (userId) {
        try {
          await axios.post('http://localhost:3001/Users/activity', {
            userId,
            userStatus: 'left page'
          });
        } catch (err) {
          console.error('Error sending activity data:', err);
        }
      }
    };

   zz

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Student" element={<StudentHomePage />} />
        <Route path="/Check" element={<Check />} />
        <Route path="/TeackAtendan" element={<Teachera />}/>
        {/* <Route path="/Student?" element={<StudentHomePage />} /> */}
        <Route path="/StudentAttendance" element={<TeachersHomePage />} />
        <Route path="/OnlineTest" element={<OnlineTest />} />
        <Route path="/AddQuestionForm" element={<AddQuestionForm />} />
        <Route path="/chat/:id" element={<ChatBody />} />
        <Route path="/attend" element={<Attendance />} />
      </Routes>
    </div>
  );
}   

export default App;
