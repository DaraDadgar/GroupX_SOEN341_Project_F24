import { useState, useEffect } from "react";
import "./css/App.css";
import axios from "axios";

import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Login from "./routes/Login.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/About" Component={About} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
