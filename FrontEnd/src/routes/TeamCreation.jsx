import { useEffect } from "react";
import { useState } from "react";
import "../css/team-creation.css";
<<<<<<< HEAD
import HeaderLogout from '../components/HeaderLogout.jsx'
import NavBar from '../components/NavBar.jsx'
import { fetchAPI, storeAPI } from "../functions/apiinterface";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function TeamCreation() {
  
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try { 
        fetchAPI("/students").then(data => {
          const availableStudents = data.data.filter(student => student.is_available);
          setStudents(availableStudents);
      })
      } catch (error) {
        console.error("Error fetching team data: ", error);
=======

import {
  fetchProtectedAPI,
  storeProtectedAPI,
} from "../functions/apiinterface";
import { useNavigate } from "react-router-dom";

export default function TeamCreation() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchProtectedAPI("/students/available", token).then((data) => {
      setStudents(data.data);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const team_name = payload["name"];
    const team_students = [];
    for (let i = 0; i < students.length; i++) {
      const student = payload[`student-${i}`];
      if (student) {
        team_students.push(payload[`student-${i}`]);
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6
      }
    };

    fetchStudents();
  }, []);

  const handleCheckboxChange = (email) => {
    setSelectedStudents(prevSelected => 
      prevSelected.includes(email)
        ? prevSelected.filter(studentEmail => studentEmail !== email)
        : [...prevSelected, email]
    );
  };

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!teamName.trim() || selectedStudents.length === 0) {
      alert("Please enter a team name and select at least one student.");
      return;
    }

    try {
      const data = {
        name: teamName,
        student_emails: selectedStudents,
      };
      const response = await storeAPI("/teams", data);
      console.log("Team created successfully: ", response);
      alert("Team created successfully!");
      setTeamName("");
      setSelectedStudents([]);
      navigate("/MainTeacher"); 
    } catch (error) {
      console.log("Error creating team:", error);
      alert("Failed to create the team.");
    }
<<<<<<< HEAD
  };
=======
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6

    const token = localStorage.getItem("token");
    const data = { name: team_name, student_emails: team_students };

    storeProtectedAPI("/teams", data, token).then(() => {
      navigate("/teacher/home");
    });
  };
  return (
<<<<<<< HEAD
<>
    <div>
    <main className="main-teamcreation">
      <form onSubmit = {handleSubmit} className="students">
=======
    <main className="main-teamcreation">
      <form className="students" onSubmit={submitHandler}>
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6
        <div className="top-display">
          <h2>Team Name:</h2>
          <div className="team-name">
            <input
              type="text"
<<<<<<< HEAD
              maxlength="60"
              placeholder="Enter the team name"
              pattern=".*\S.*"
              name = "name"
              required
              value={teamName}
              onChange={handleTeamNameChange}
            />
          </div>
        </div>
        <h2>Select The Team Members:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <label>
                <input 
                type="checkbox" 
                name={student.id}
                checked={selectedStudents.includes(student.email)}
                onChange={() => handleCheckboxChange(student.email)}
                />
                {student.name} (ID: {student.id}, Email: {student.email})
              </label>
            </li>
          ))}
        </ul>
    <div className="buttons">
    <button type="button" style={{marginLeft: "155px"}}>Cancel</button>
    <button type="submit" style={{marginLeft: "30px"}}>Confirm</button>
  </div>
  </form>
  </main>
  </div>
  </>
=======
              name="name"
              maxLength="60"
              placeholder="Enter the team name"
              pattern=".*\S.*"
              required
            ></input>
          </div>
        </div>
        <h2>Select The Team Members:</h2>
        {students.length ? (
          <>
            <ul>
              {students.map((student, index) => (
                <li key={student.id}>
                  <label>
                    <input
                      type="checkbox"
                      name={`student-${index}`}
                      value={student.email}
                    />
                    {student.name}
                  </label>
                </li>
              ))}
            </ul>
            <div className="buttons">
              <button>Cancel</button>
              <button type="submit">Confirm</button>
            </div>{" "}
          </>
        ) : (
          <h1>No Students Currently Available</h1>
        )}
      </form>
    </main>
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6
  );
}