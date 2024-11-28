import { useEffect, useState } from "react";
import "../css/main-teacher.css";

import { fetchProtectedAPI, deleteTeam } from "../functions/ApiInterface";
import { useNavigate } from "react-router-dom";

function assessments_avg(assessments){
  let coop_avg = 0;
  let conc_avg = 0;
  let prac_avg = 0;
  let ethi_avg = 0;

  for (const assessment of assessments){
    coop_avg += assessment.cooperation_score;
    conc_avg += assessment.conceptual_contribution_score;
    prac_avg += assessment.practical_contribution_score;
    ethi_avg += assessment.work_ethic_score;
  }

  const num_ass = assessments.length;
  if (num_ass > 0){
    coop_avg /= num_ass;
    conc_avg /= num_ass;
    prac_avg /= num_ass;
    ethi_avg /= num_ass;
  }

  const total_avg = (coop_avg + conc_avg + prac_avg + ethi_avg)/4;

  return [coop_avg, conc_avg, prac_avg, ethi_avg, total_avg, num_ass];

}

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
            async (response) => {
              let team_members = []
              for (let j = 0; j < response.data.length; j++){
                 await fetchProtectedAPI(`assessments/student/${response.data[j].id}`, token).then( (result) => {
                  const avgs = assessments_avg(result.data.Assessments);
                  team_members[j] = {...response.data[j], "assessments" : avgs};
                })
              }
              studs[i] = team_members;
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
          <button style={{ marginTop: "-20px" }}>
            {" "}
            Download Teams ↓{" "}
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
  const HandleDeleteTeam = async(teamId) => {
    const token = localStorage.getItem("token");
    if(!token){
      alert("Authentication error. Please log in again.");
      return;
    }

    if(window.confirm("Are you sure you want to delete this team?")) {
      const response = await deleteTeam(teamId, token);
      if (response.status === 200) {
        window.location.reload();
        alert("Team deleted successfully");
      } else {
        alert("Failed to delete team: " + response.data?.Reason || "Unknown error");
      }
    }
  };
  return (
    <div className="instructor">
      <ul style={{ marginTop: "20px" }}>
      <table style={{ marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>{team.name}</th>
            <th>Cooperation</th>
            <th>Conceptual Contribution</th>
            <th>Practical Contribution</th>
            <th>Work Ethic</th>
            <th>Average</th>
            <th>Evaluations</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
                    return (
                      <tr key={student.id}>
                        <td> {student.name}</td>
                        <td>{student.assessments[0] ==0 ? "N/A" : student.assessments[0].toFixed(1)}</td>
                        <td>{student.assessments[1] ==0 ? "N/A" : student.assessments[1].toFixed(1)}</td>
                        <td>{student.assessments[2] ==0 ? "N/A" : student.assessments[2].toFixed(1)}</td>
                        <td>{student.assessments[3] ==0 ? "N/A" : student.assessments[3].toFixed(1)}</td>
                        <td>{student.assessments[4] ==0 ? "N/A" : student.assessments[4].toFixed(1)}</td>
                        <td>{student.assessments[5] ==0 ? "N/A" : student.assessments[5]}</td>
                      </tr>
                    );
                  })}

        </tbody>
      </table>
        <div className="del-edit">
          <button className="more" onClick={() => team_info(team, students)}>
            {" "}
            MORE
          </button>
          <button className="edit">EDIT</button>
          <button
            className="delete"
            onClick={() => {
              HandleDeleteTeam(team.id);
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
