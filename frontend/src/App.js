import Home from "./Pages/Home/Home";
import { Routes, Route} from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import StudentHomePage from "./Pages/Students/StudentHomePage";
import Chat from "./Pages/Students/Chat";

function App() {
  return <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Student?" element={<StudentHomePage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>;
}

export default App;