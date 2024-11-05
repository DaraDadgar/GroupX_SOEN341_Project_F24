import "../css/teacher-home.css";

export default function Teams({ teams }) {
  return (
    <main className="main-teacher">
      <div className="top-display">
        <span className="create-team">Create Team </span>
      </div>
      <div className="teams">
        {teams.map((team) => (
          <Team teamName={team.teamName} students={team.students} />
        ))}
      </div>
    </main>
  );
}

function Team({ teamName, students }) {
  return (
    <div className="team">
      <h2>{teamName}</h2>

      <ul>
        {students.map((student) => (
          <li>{`${student.lastName}, ${student.firstName}`}</li>
        ))}
      </ul>

      <div className="options">
        <span className="delete">DELETE</span>
        <span className="edit">EDIT</span>
      </div>
    </div>
  );
}
