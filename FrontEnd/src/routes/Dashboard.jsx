import "../css/Instructor.css";
import { useEffect, useState } from "react";
import { fetchProtectedAPI, fetchAPI } from "../functions/apiinterface";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { teamId } = useParams(); // Get the teamId from route parameters for example /dashboard/1
  const [teamName, setTeamName] = useState("Loading...");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      // Fetch the team list to get the team name
      const teamsResponse = await fetchProtectedAPI('/teams', token);
      if (teamsResponse.status === 200) {
        const currentTeam = teamsResponse.data.find((team) => team.id === parseInt(teamId));
        setTeamName(currentTeam ? currentTeam.name : "Team Not Found");
      } else {
        console.error("Failed to fetch teams");
      }

      // Fetch members of the specific team
      const membersResponse = await fetchProtectedAPI(`/teams/${teamId}`, token);
      if (membersResponse.status === 200) {
        // Fetch assessment for each member
        const membersData = await Promise.all(
          membersResponse.data.map(async (member) => {
            const assessmentResponse = await fetchAPI(`/assessments/${member.id}`);
            const assessment = assessmentResponse.status === 200 ? assessmentResponse.data : {};
            return {
              ...member,
              assessment: {
                cooperation_score: assessment.cooperation_score || "N/A",
                conceptual_contribution_score: assessment.conceptual_contribution_score || "N/A",
                practical_contribution_score: assessment.practical_contribution_score || "N/A",
                work_ethic_score: assessment.work_ethic_score || "N/A",
                comments: assessment.comments || "No comments",
              },
            };
          })
        );
        setMembers(membersData);
      } else {
        console.error("Failed to fetch team members");
      }
    };

    fetchTeamData();
  }, [teamId]);

  const renderStars = (average) => {
    const fullStars = Math.floor(average);
    const halfStar = average % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      <span style={{color: "orange", fontSize: "20px"}}>
        {"★".repeat(fullStars)}
        {halfStar ? "½" : ""}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };
  
  return (
    <main>
      <div className="stars-header">
        {members.map((member) => {
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
    <div key={member.id} style={{ marginBottom: "10px" }}>
    <strong>{member.name}:</strong> {average !== "N/A" ? renderStars(average) : "No Rating"}
  </div>
);
})}
</div>

      <div className="instructor header">
        <h2 style={{ marginTop: "50px" }}>{teamName}:</h2>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Cooperation</th>
            <th style={cellStyle}>Conceptual Contribution</th>
            <th style={cellStyle}>Practical Contribution</th>
            <th style={cellStyle}>Work Ethic</th>
            <th style={cellStyle}>Average</th>
            <th style={cellStyle}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => {
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
                <td style={cellStyle}>{member.name}</td>
                <td style={cellStyle}>{cooperation_score}</td>
                <td style={cellStyle}>{conceptual_contribution_score}</td>
                <td style={cellStyle}>{practical_contribution_score}</td>
                <td style={cellStyle}>{work_ethic_score}</td>
                <td style={cellStyle}>{average}</td>
                <td style={cellStyle}>{member.assessment.comments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

const cellStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
  width: "100px",
  height: "50px",
};
