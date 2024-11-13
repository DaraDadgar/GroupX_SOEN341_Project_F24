import "./App.css";

import "./css/general.css";

import GeneralHomePage from "./routes/GeneralHomePage.jsx";
import About from "./routes/About.jsx";
import MainLogin from "./routes/MainLogin.jsx";
import TeamCreation from "./routes/TeamCreation.jsx";
import TeammateSelection from "./routes/TeammateSelection.jsx";
import Evaluation from "./routes/Evaluation.jsx";

import MainTeacher from "./routes/MainTeacher.jsx";
import { AuthProvider } from "./config/AuthContext.jsx";
import ProtectedRoute from "./config/ProtectedRoute.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainSignup from "./routes/MainSignup.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Instructor from "./routes/Instructor.jsx";
import MyTeam from "./routes/Team.jsx";
import Dashboard from "./routes/Dashboard.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<GeneralHomePage />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<MainSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/student/home"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <MyTeam />
              </ProtectedRoute>
            }
          />

          <Route
            path="/teacher/home"
            element={
              <ProtectedRoute allowedRoles={["teacher"]}>
                <MainTeacher />
              </ProtectedRoute>
            }
          />

          <Route
            path="/teacher/team-creation"
            element={
              <ProtectedRoute allowedRoles={["teacher"]}>
                <TeamCreation />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/select-teammate"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <TeammateSelection />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/evaluation"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Evaluation />
              </ProtectedRoute>
            }
          />

          <Route path="/Instructor" element={<Instructor />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
