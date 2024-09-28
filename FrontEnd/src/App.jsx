import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

import Home from "./routes/Home.jsx"
import About from "./routes/About.jsx"
import Login from "./routes/Login.jsx"
import MainLogin from "./routes/MainLogin.jsx"
import TeamCreation from './routes/TeamCreation.jsx'

import {fetchAPI, storeAPI} from "./functions/apiinterface.jsx"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {

  const [TeamCreationStudentsList, setTeamCreationStudentsList] = useState([])
  const [MyTeamStudentList, setMyTeamStudentList] = useState([])

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
          <Route path ="/MainLogin" element = {<MainLogin/>}/>
          <Route path = "/"/>
          <Route path ="/About" Component = {About}/>
          <Route path = "/TeamCreation" element = {<TeamCreation students = {TeamCreationStudentsList}/>}/>
          <Route path = "/Team" Component = {About}/>
          {/* <Route path = "/Team" element = {<Team students = {MyTeamStudentList} teamName = {df}/>}/> */}
        </Routes>
    </Router>

    )
}

export default App
