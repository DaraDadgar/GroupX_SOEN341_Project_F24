import { useState, useEffect } from "react";

import "./App.css";
import "./css/general.css";

import GeneralHomePage from "./routes/GeneralHomePage.jsx";
import About from "./routes/About.jsx";
import MainLogin from "./routes/MainLogin.jsx";
import TeamCreation from "./routes/TeamCreation.jsx";
import Team from "./routes/Team.jsx";
import MainTeacher from "./routes/MainTeacher.jsx";
import { AuthProvider } from "./config/AuthContext.jsx";
import ProtectedRoute from "./config/ProtectedRoute.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainSignup from "./routes/MainSignup.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Instructor from "./routes/Instructor.jsx";

function App() {
  const [TeamCreationStudentsList, setTeamCreationStudentsList] = useState([]);
  useEffect(() => {
    const fetchTeamCreationStudentsList = async () => {
      // fetchAPI("/students").then(data => {
      //   setTeamCreationStudentsList(data.data)
      // }) // uncomment this
      setTeamCreationStudentsList([
        { name: "Name X", id: "123", email: "abc@gmail.com" },
        { name: "Name Y", id: "456", email: "def@gmail.com" },
        { name: "Name Z", id: "789", email: "ghi@gmail.com" },
        { name: "Name K", id: "555", email: "brand@gmail.com" },
        { name: "Name X", id: "123", email: "abc@gmail.com" },
        { name: "Name Y", id: "456", email: "def@gmail.com" },
        { name: "Name Z", id: "789", email: "ghi@gmail.com" },
        { name: "Name K", id: "555", email: "brand@gmail.com" },
      ]); // delete this
    };

    // const fetchMyTeamStudentList = async () => {
    //   fetchAPI("/display_my_team").then(data => {
    //     setMyTeamStudentList(data.data)
    //   })
    // };

    // fetchMyTeamStudentList()
    fetchTeamCreationStudentsList();
  }, []);

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

          <Route
            path="/student/home"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Team />
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

          <Route path="/Instructor" element={<Instructor />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
