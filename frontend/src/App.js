import Home from "./Pages/Home/Home";
import { Routes, Route} from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import StudentHomePage from "./Pages/Students/StudentHomePage";
import ChatBody from "./Pages/Students/Chat/chatBody/ChatBody";
import Attendance from "./Pages/Students/Attendance/Attendance";
import TeachersHomePage from "./Pages/Teachers/TeachesHomePages";

function App() {
  return <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        {/* <Route path="/Student?" element={<StudentHomePage />} /> */}
        <Route path="/Student?" element={<TeachersHomePage />} />
        <Route path="/chat" element={<ChatBody />} />
        <Route path="/attend" element={<Attendance />} />
      </Routes>
    </div>;
}

export default App;
