import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'
import './css/general.css'

import GeneralHomePage from "./routes/GeneralHomePage.jsx"
import About from "./routes/About.jsx"
import MainLogin from "./routes/MainLogin.jsx"
import TeamCreation from './routes/TeamCreation.jsx'
import Team from './routes/Team.jsx'
import MainTeacher from './routes/MainTeacher.jsx'

import {fetchAPI, storeAPI} from "./functions/apiinterface.jsx"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainSignup from './routes/MainSignup.jsx'



function App() {

  const [TeamCreationStudentsList, setTeamCreationStudentsList] = useState([])
  useEffect(() => {
    const fetchTeamCreationStudentsList = async () => {
      fetchAPI("/students").then(data => {
        setTeamCreationStudentsList(data.data)
      })
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
        <Routes>
          <Route path = "/" element = {<GeneralHomePage/>}/>
          <Route path ="/login" element = {<MainLogin/>}/>
          <Route path ="/About" Component = {About}/>
          <Route path = "/TeamCreation" element = {<TeamCreation students = {TeamCreationStudentsList}/>}/>
          <Route path = "/Team" element = {<Team/>}/>
          <Route path = "/Signup" element = {<MainSignup/>}/>
          <Route path = "/Teacher" element = {<MainTeacher/>}/>
        </Routes>
    </Router>

    )
}

export default App
