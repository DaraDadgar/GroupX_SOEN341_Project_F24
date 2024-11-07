import { useEffect, useState } from "react";
import "../css/main-teacher.css";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function MainTeacher() {
    const [teams, setTeams] = useState([]);
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
=======

import { fetchProtectedAPI } from "../functions/apiinterface";
import { useNavigate } from "react-router-dom";

export default function MainTeacher() {
  const navigate = useNavigate();
  const create_team = () => navigate("/teacher/team-creation");
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6

  const [teams, setTeams] = useState([]);
  const [students, setStudents] = useState([]);

<<<<<<< HEAD
    const handleLogout = async () => {
        try{
          navigate("/TeamCreation");
        } catch (error) {
          console.error("Error navigating to TeamCreation:", error);
        }
      };

  return (
    <main class="main-teacher">
        

      <div class="top-display">
        <button class="create-team" onClick={handleLogout}>Create Team </button>
      </div>


      <h1> LIST OF TEAMS</h1>
      <div class-name = "container">
        <div class-name = "box">
            {teams.map((team) => (
                <>
                    <h4>{team.id + "" + team.name}</h4>
                </>
            ))}

            <br/>
            <br/>
=======
  const fetchTeams = async () => {
    const token = localStorage.getItem("token");
    const teams_info = await fetchProtectedAPI("/teams", token).data;
    console.log("teams_info", teams_info);
    setTeams(teams_info);

    const students = await teams_info.map((team) => {
      fetchProtectedAPI(`/teams${team.id}/students`, token).data;
    });

    setStudents(students);
  };

  useEffect(() => {}, []);

  console.log(teams);
  console.log("students: ", students);

  const team1 = {
    id: 1,
    name: "Team X",
    students: [{ id: 1, name: "Marc Hab" }],
  };

  return (
    <main className="main-teacher">
      <div className="instructor">
        <h2 style={{ marginTop: "50px" }}> Teams Created:</h2>
        <div className="buttons">
          <button style={{ marginTop: "-20px" }} onClick={create_team}>
            {" "}
            Create Team +{" "}
          </button>
>>>>>>> 23a4e48d25a9b081a2b4cfeca625478a2ab705c6
        </div>
      </div>
      {teams.length ? (
        <div>
          {teams.map((team, index) => (
            <Team
              key={team.id}
              team={team}
              students={students[index] || []} // Passing students array for this team
            />
          ))}
        </div>
      ) : (
        <NoTeam />
      )}
    </main>
  );
}

function Team({ team, students }) {
  return (
    <div className="instructor">
      <ul style={{ marginTop: "20px" }}>
        <h3>{team.name}</h3>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
        <div className="delEdit">
          <button
            className="delete"
            onClick={() => {
              confirm("Are you sure you want to delete this team?");
            }}
          >
            DELETE
          </button>
          <button className="edit">EDIT</button>
        </div>
      </ul>
    </div>
  );
}

function NoTeam() {
  return <h1>No Teams Created</h1>;
}
