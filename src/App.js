import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import StudentDash from "./components/Dashboard/Student/Dashboard";
import CounselorDash from "./components/Dashboard/Counselor/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDash />} />
        <Route path="/counselor-dashboard" element={<CounselorDash />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
