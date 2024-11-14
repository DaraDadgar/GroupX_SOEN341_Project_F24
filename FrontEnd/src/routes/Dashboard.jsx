import "../css/dashboard.css";

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

function average(assessment) {
  const sum =
    assessment.cooperation_score +
    assessment.conceptual_contribution_score +
    assessment.conceptual_contribution_score +
    assessment.work_ethic_score;

  const avg = sum / 4;

  return avg.toFixed(1);
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
      readOnly
      tabIndex="-1"
    >
      This is some text that cannot be edited or focused.
    </textarea>
  );
}

export default function Dashboard() {
  const team = { id: 4, name: "Team X" };
  const team_members = [
    { id: 1, name: "Julia Boutros", average: 1 },
    { id: 2, name: "Spencer Shay", average: 2 },
    { id: 3, name: "Oren Argot", average: 3 },
    { id: 4, name: "Dad", average: 4 },
  ];

  const team_assessments = [
    [
      {
        id: 1,
        cooperation_score: 1,
        conceptual_contribution_score: 2,
        practical_contribution_score: 3,
        work_ethic_score: 4,
        comments: "Excellent!",
      },

      {
        id: 2,
        cooperation_score: 3,
        conceptual_contribution_score: 4,
        practical_contribution_score: 5,
        work_ethic_score: 4,
        comments: "Great!",
      },
      {
        id: 3,
        cooperation_score: 1,
        conceptual_contribution_score: 2,
        practical_contribution_score: 5,
        work_ethic_score: 4,
        comments: "Meh!",
      },
      {
        id: 4,
        cooperation_score: 3,
        conceptual_contribution_score: 2,
        practical_contribution_score: 3,
        work_ethic_score: 3,
        comments: "Okay!",
      },
    ],
    [],
    [],
    [],
  ];

  return (
    <main className="dashboard">
      <h2>{team.name}</h2>

      <StarTable team_members={team_members} />

      <StudentTable assessments={team_assessments[0]} />

      <StudentComments />
    </main>
  );
}
