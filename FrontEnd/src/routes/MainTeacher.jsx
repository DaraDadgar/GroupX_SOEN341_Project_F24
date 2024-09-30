import { fetchAPI } from "../functions/apiinterface";
import "../css/main-teacher.css";
import { useState, useEffect } from "react";

export default function MainTeacher() {
    const [teams, setTeams] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {
        const response = async() => {
            fetchAPI("/students").then(data => {
                setStudents(data.data)
            })
            fetchAPI("/teams").then(data => {
                setTeams(data.data)
            })
        } 
        response()
    },[])


  return (
    <main class="main-teacher">
        

      <div class="top-display">
        <span class="create-team">Create Team </span>
      </div>


      <h1> LIST OF TEAMS</h1>
      <div class-name = "container">
        <div class-name = "box">
            {teams.map((team) => (
                <>
                    <h4>{team.id + team.name}</h4>
                </>
            ))}

            <br/>
            <br/>
        </div>
            <h1>LIST OF STUDENTS</h1>

            <div class-name = "box">

                {students.map((student) => (
                <>
                    <h4>{student.name + " " + student.email}</h4>
                    <h1>{student.email}</h1>
                </>
                ))}

            </div>
      </div>
    </main>
  );
}