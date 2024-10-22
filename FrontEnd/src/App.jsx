import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import "./css/general.css";

import GeneralHomePage from "./routes/GeneralHomePage.jsx";
import About from "./routes/About.jsx";
import MainLogin from "./routes/MainLogin.jsx";
import TeamCreation from "./routes/TeamCreation.jsx";
import Team from "./routes/Team.jsx";
import MainTeacher from "./routes/MainTeacher.jsx";

import { fetchAPI, storeAPI } from "./functions/apiinterface.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainSignup from "./routes/MainSignup.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Instructor from "./routes/Instructor.jsx";
import TeamModification from "./routes/TeamModification.jsx";

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
        {name: "Name K", id: "555", email: "brand@gmail.com"},
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
    
    <Router>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<GeneralHomePage />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/about" element={<About/>} />
        <Route
          path="/TeamCreation"
          element={<TeamCreation students={TeamCreationStudentsList} />}
        />
        <Route path="/Team" element={<Team />} />
        <Route path="/Signup" element={<MainSignup />} />
        <Route path="/Teacher" element={<MainTeacher />} />
        <Route path="/Instructor" element={<Instructor />} />
        <Route path="/teammodification" element={<TeamModification/>}/>
      </Routes>
    </Router>
  );
}

export default App;
