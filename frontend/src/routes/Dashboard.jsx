import "../css/dashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProtectedAPI } from "../functions/ApiInterface";

function StarScore({ average }) {
  return (
    <div className="star-row">
      <span>{average >= 1 ? "★" : "☆"}</span>
      <span>{average >= 2 ? "★" : "☆"}</span>
      <span>{average >= 3 ? "★" : "☆"}</span>
      <span>{average >= 4 ? "★" : "☆"}</span>
      <span>{average >= 5 ? "★" : "☆"}</span>
    </div>
  );
}

function StarTable({ team_members }) {
  return (
    <table className="star-table">
      <tbody>
        {team_members.map((student) => (
          <tr key={student.id}>
            <th>{student.name}</th>
            <td>
              <StarScore average={student.average} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function sum_score(assessment) {
  return (
    assessment.cooperation_score +
    assessment.conceptual_contribution_score +
    assessment.practical_contribution_score +
    assessment.work_ethic_score
  );
}

function average(assessment) {
  const avg = sum_score(assessment) / 4;
  return avg.toFixed(1);
}

function total_avg(assessments) {
  let tot = 0;

  for (const assessment of assessments) {
    tot += sum_score(assessment) / 4;
  }

  if (tot > 0) {
    tot = tot / assessments.length;
  }

  return Math.ceil(tot);
}

function StudentTable({ assessments }) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Cooperation</th>
          <th>Conceptual Contribution</th>
          <th>Practical Contribution</th>
          <th>Work Ethic</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {assessments.map((assessment, index) => {
          return (
            <tr key={assessment.id} className={index % 2 == 0 ? "even" : "odd"}>
              <td>{assessment.cooperation_score}</td>
              <td>{assessment.conceptual_contribution_score}</td>
              <td>{assessment.practical_contribution_score}</td>
              <td>{assessment.work_ethic_score}</td>
              <td>{average(assessment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function StudentComments({ assessments }) {
  return (
    <textarea
      id="comments"
      name="comments"
      maxLength="500"
      cols="100"
      value={assessments
        .map((assessment) => `• ${assessment.comments}`)
        .join("\n")}
      readOnly
      tabIndex="-1"
    ></textarea>
  );
}

function StudentDash({ student }) {
  return (
    <>
      <h4>{student.name}:</h4>
      <StudentTable assessments={student.assessments} />
      <h4>Comments Received:</h4>
      <StudentComments assessments={student.assessments} />
    </>
  );
}

function StudentsDash({ students }) {
  return (
    <>
      {students.map((student, index) => (
        <StudentDash key={student.id} student={student} />
      ))}
    </>
  );
}

export default function Dashboard() {
  const location = useLocation(); // Retrieve the state passed via navigate
  const navigate = useNavigate();
  const { team, students } = location.state; // Extract the team data
  const [team_members, setTeamMembers] = useState(students);
  const [loading, setLoading] = useState(true);

  const fetchAssessments = async () => {
    const token = localStorage.getItem("token");

    try {
      const newStudents = [...team_members]; // Create a copy of the students array

      // Fetch data for each student
      for (let i = 0; i < newStudents.length; i++) {
        const response = await fetchProtectedAPI(
          `/assessments/student/${newStudents[i].id}`,
          token
        );
        const ass = response.data.Assessments;

        // Calculate and update student average and assessments
        newStudents[i] = {
          ...newStudents[i],
          average: total_avg(ass),
          assessments: ass,
        };
      }

      // Update the state with the new students data
      setTeamMembers(newStudents);
      setLoading(false); // Set loading to false once the data is fetched
    } catch (error) {
      console.error("Error fetching assessments:", error);
    }
  };

  useEffect(() => {
    fetchAssessments(); // Call fetchAssessments when component mounts
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return <div></div>; // Show a loading message or spinner while data is being fetched
  }

  return (
    <main className="dashboard">
      <h2>{team.name}</h2>
      <StarTable team_members={team_members} />
      <StudentsDash students={team_members} />
      <button onClick={() => navigate("/teacher/home")}>Back</button>
    </main>
  );
}