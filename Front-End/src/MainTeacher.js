import "./css/main-teacher.css";

export default function Teams({ teams }) {
  return (
    <main class="main-teacher">
      <div class="top-display">
        <span class="create-team">Create Team </span>
      </div>
      <div class="teams">
        {teams.map((team) => (
          <Team teamName={team.teamName} students={team.students} />
        ))}
      </div>
    </main>
  );
}

function Team({ teamName, students }) {
  return (
    <div class="team">
      <h2>{teamName}</h2>

      <ul>
        {students.map((student) => (
          <li>{`${student.lastName}, ${student.firstName}`}</li>
        ))}
      </ul>

      <div class="options">
        <span class="delete">DELETE</span>
        <span class="edit">EDIT</span>
      </div>
    </div>
  );
}
