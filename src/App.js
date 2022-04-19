import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/Login/Student/Login";
import CounselorLogin from "./components/Login/Counselor/Login";
import StudentDash from "./components/Dashboard/Student/Dashboard";
import CounselorDash from "./components/Dashboard/Counselor/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/counselor-login" element={<CounselorLogin />} />
        <Route path="/student-dashboard" element={<StudentDash />} />
        <Route path="/counselor-dashboard" element={<CounselorDash />} />
        <Route path="*" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}
