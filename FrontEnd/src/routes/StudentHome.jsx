import "../css/student-home.css";

export default function Team({ teamName, students }) {
  return (
    <main className="main-student">
      <div className="team">
        <h2>{teamName}</h2>

        <ul>
          {students.map((student) => (
            <li>{`${student.lastName}, ${student.firstName}`}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
