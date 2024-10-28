import "./css/main-student.css";
import { useEffect, useState } from "react";
import { fetchAPI } from "./apiinterface";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";

export default function MainStudent({teamId}) {
const [teamName, setTeamName] = useState("");
const [students, setStudents] = useState([]);

useEffect(() => {
    const fetchTeamData = async () => {
        try {
            const teamData = await fetchAPI('/teams/${teamId}');
            const studentsData = await fetchAPI('/teams/${teamId}/students');

            setTeamName(teamData.name);
            setStudents(studentsData);
        } catch (error) {
            console.error("Error fetching team data:", error);
        }
    };

    fetchTeamData();
}, {teamId});

  return (
    <>
    <HeaderLogout />
    <NavBar />

    <main className="main-student">
      <div className="team">
        <h2>{teamName || "Team Name"}</h2>

        <ul>
            {students.length > 0 ? (
                students.map((student) => (
                    <li key={student.id}>{'${student.lastname}, ${student.firstname}'}</li>
                ))
            ) : (
            <li>No students in this team</li>    
            )}
        </ul>
      </div>
    </main>
    </>
  );
}