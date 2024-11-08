import PropTypes from "prop-types"; // Import PropTypes
import { useEffect, useState } from "react";
import "../css/main-teacher.css";

import { fetchProtectedAPI } from "../functions/apiinterface";
import { useNavigate } from "react-router-dom";

export default function MainTeacher() {
  const navigate = useNavigate();
  const create_team = () => navigate("/teacher/team-creation");

  const [teams, setTeams] = useState([]);
  const [students, setStudents] = useState([]);

  //Uncomment if you want to use fetchTeams (it was not being used, hence why I commented it!)
//   const fetchTeams = async () => {
//     const token = localStorage.getItem("token");
//     const teams_info = await fetchProtectedAPI("/teams", token).data;
//     console.log("teams_info", teams_info);
//     setTeams(teams_info);

//     const students = await teams_info.map((team) => {
//       fetchProtectedAPI(`/teams${team.id}/students`, token).data;
//     });

//     setStudents(students);
//   };

  useEffect(() => {}, []);

  console.log(teams);
  console.log("students: ", students);

  //This part of code was not being used so I commented it
//   const team1 = {
//     id: 1,
//     name: "Team X",
//     students: [{ id: 1, name: "Marc Hab" }],
//   };

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

// Adding PropTypes for `Team` component to validate `team` and `students` props
Team.propTypes = {
    team: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

function NoTeam() {
  return <h1>No Teams Created</h1>;
}
