import { useEffect, useState } from "react";
import "../css/main-teacher.css";

import { fetchProtectedAPI } from "../functions/ApiInterface";
import { useNavigate } from "react-router-dom";

export default function MainTeacher() {
  const navigate = useNavigate();
  const create_team = () => navigate("/teacher/team-creation");
  const [teams, setTeams] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchTeams = async () => {
    const token = localStorage.getItem("token");
    await fetchProtectedAPI("/teams", token)
      .then((data) => {
        setTeams(data.data);
        return data.data;
      })
      .then(async (teams) => {
        let studs = [];
        for (let i = 0; i < teams.length; i++) {
          await fetchProtectedAPI(`/teams/${teams[i].id}/students`, token).then(
            (data) => {
              studs[i] = data.data;
            }
          );
        }
        setStudents(studs);
      });
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <main className="main-teacher">
      <div className="instructor">
        <h2 style={{ marginTop: "50px" }}> Teams Created:</h2>
        <div className="buttons">
          <button style={{ marginTop: "-20px" }} onClick={create_team}>
            {" "}
            Create Team +{" "}
          </button>
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
  const navigate = useNavigate();
  const team_info = (team, students) => {
    navigate(`/teacher/team/dashboard`, { state: { team, students } }); // Pass team data in the state object
  };
  return (
    <div className="instructor">
      <ul style={{ marginTop: "20px" }}>
        <h3>{team.name}</h3>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
        <div className="delEdit">
          <button className="more" onClick={() => team_info(team, students)}>
            {" "}
            MORE
          </button>
          <button className="edit">EDIT</button>
          <button
            className="delete"
            onClick={() => {
              confirm("Are you sure you want to delete this team?");
            }}
          >
            DELETE
          </button>
        </div>
      </ul>
    </div>
  );
}

function NoTeam() {
  return <h1>No Teams Created</h1>;
}

