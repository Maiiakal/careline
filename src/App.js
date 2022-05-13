import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Register/Register";
import RegistrationConfirmed from "./components/RegistrationConfirmed/registerationConfirmed";
import StudentDash from "./components/Dashboard/Student UI Pages/Main Dashboard/Dashboard";
import CounselorDash from "./components/Dashboard/Counselor UI Pages/Main Dashboard/Dashboard";
import CounselorSchedule from "./components/Dashboard/Counselor UI Pages/My Sessions/ViewSchedule";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/registeration-confirmed"
          element={<RegistrationConfirmed />}
        />
        <Route path="/student-dashboard" element={<StudentDash />} />
        <Route path="/counselor-dashboard" element={<CounselorDash />} />
        <Route path="/counselor-dashboard" element={<CounselorDash />} />
        <Route path="/counselor-view-schedule" element={<CounselorSchedule />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
