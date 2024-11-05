import "./css/general.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Team from "./routes/StudentHome";
import Teams from "./routes/TeacherHome";
import TCourses from "./routes/TeacherCourses";

import ProtectedRoute from "./config/ProtectedRoute";
import { AuthProvider } from "./config/AuthContext";

function App() {
  const team = {
    teamName: "Team X",
    students: [{ firstName: "Marc", lastName: "Hab" }],
  };
  return (
    <AuthProvider>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/student/home"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Team
                  teamName={"Team X"}
                  students={[{ firstName: "Marc", lastName: "Hab" }]}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/home"
            element={
              <ProtectedRoute allowedRoles={["teacher"]}>
                <Teams teams={[team, team]} />
              </ProtectedRoute>
            }
          />
          <Route path="/teacher/courses" element={<TCourses />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
