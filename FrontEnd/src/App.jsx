import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

import Home from "./routes/Home.jsx"
import About from "./routes/About.jsx"
import Login from "./routes/Login.jsx"


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {

  // const [name, setName] = useState();

  // const fetchName = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:5000/login")
  //     setName(response.data);
  //   }
  //   catch(error) {
  //   }
  // }


  // useEffect(() => {
  //   fetchName()
  // },[])

  return (

    <Router>
        <Routes>
          <Route path ="/Home" Component = {Home}/>
          <Route path ="/About" Component = {About}/>
          <Route path = "/Login" Component = {Login}/>
        </Routes>
    </Router>
  )
}

export default App
