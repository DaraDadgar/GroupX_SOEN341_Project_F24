import "../css/instructor.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAPI, fetchProtectedAPI } from "../functions/ApiInterface";

export default function Instructor() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeamsData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      // Fetch all teams
      const teamsResponse = await fetchProtectedAPI("/teams", token);
      if (teamsResponse.status === 200) {
        const teamList = teamsResponse.data;

        // Fetch members and assessments for each team
        const teamsWithMembers = await Promise.all(
          teamList.map(async (team) => {
            // Fetch members of the team
            const membersResponse = await fetchProtectedAPI(
              `/teams/${team.id}`,
              token
            );
            if (membersResponse.status === 200) {
              const members = await Promise.all(
                membersResponse.data.map(async (member) => {
                  // Fetch assessment for each member
                  const assessmentResponse = await fetchAPI(
                    `/assessments/${member.id}`
                  );
                  const assessment =
                    assessmentResponse.status === 200
                      ? assessmentResponse.data
                      : {};

                  return {
                    ...member,
                    assessment: {
                      cooperation_score: assessment.cooperation_score || "N/A",
                      conceptual_contribution_score:
                        assessment.conceptual_contribution_score || "N/A",
                      practical_contribution_score:
                        assessment.practical_contribution_score || "N/A",
                      work_ethic_score: assessment.work_ethic_score || "N/A",
                      comments: assessment.comments || "No comments",
                    },
                  };
                })
              );
              return { ...team, members };
            } else {
              console.error(`Failed to fetch members for team ${team.id}`);
              return { ...team, members: [] };
            }
          })
        );

        setTeams(teamsWithMembers);
      } else {
        console.error("Failed to fetch teams");
      }
    };

    fetchTeamsData();
  }, []);

  return (
    <main>
      <div className="instructor header">
        <h2 style={{ marginTop: "50px" }}>Teams Created:</h2>
        <div className="buttons">
          <button style={{ marginTop: "-20px" }}>Create a New Team</button>
          <button style={{ marginTop: "-20px"}}>Download Teams</button>
        </div>
      </div>

      <div className="instructor header">
        {teams.map((team) => (
          <ul
            key={team.id}
            style={{
              marginTop: "20px",
              padding: "25px",
              color: "white",
              textAlign: "center",
            }}
          >
            <table style={{ marginBottom: "20px" }}>
              <thead>
                <tr>
                  <th style={{ padding: "25px" }}>{team.name}</th>
                  <th style={{ padding: "25px" }}>Cooperation</th>
                  <th style={{ padding: "25px" }}>Conceptual Contribution</th>
                  <th style={{ padding: "25px" }}>Practical Contribution</th>
                  <th style={{ padding: "25px" }}>Work Ethic</th>
                  <th style={{ padding: "25px" }}>Average</th>
                  <th style={{ padding: "25px" }}>Evaluations</th>
                </tr>
              </thead>
              <tbody>
                {team.members.map((member) => {
                  const {
                    cooperation_score,
                    conceptual_contribution_score,
                    practical_contribution_score,
                    work_ethic_score,
                  } = member.assessment;
                  const average =
                    cooperation_score !== "N/A" &&
                    conceptual_contribution_score !== "N/A" &&
                    practical_contribution_score !== "N/A" &&
                    work_ethic_score !== "N/A"
                      ? (
                          (cooperation_score +
                            conceptual_contribution_score +
                            practical_contribution_score +
                            work_ethic_score) /
                          4
                        ).toFixed(1)
                      : "N/A";

                  return (
                    <tr key={member.id}>
                      <td style={{ borderBottom: "2px solid white" }}>
                        {member.name}
                      </td>
                      <td style={{ borderBottom: "2px solid white" }}>
                        {cooperation_score}
                      </td>
                      <td style={{ borderBottom: "2px solid white" }}>
                        {conceptual_contribution_score}
                      </td>
                      <td style={{ borderBottom: "2px solid white" }}>
                        {practical_contribution_score}
                      </td>
                      <td style={{ borderBottom: "2px solid white" }}>
                        {work_ethic_score}
                      </td>
                      <td style={{ borderBottom: "2px solid white" }}>
                        {average}
                      </td>
                      <td style={{ borderBottom: "2px solid white" }}>
                        {member.assessment.comments}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

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
              <button className="more">
                <Link to={`/dashboard/${team.id}`}>MORE</Link>
              </button>
            </div>
          </ul>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}
      >
        
      </div>
    </main>
  );
}