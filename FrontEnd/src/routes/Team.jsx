import "../css/main-student.css";

export default function Team({teamName, students}) {
  return (
    <main class="main-student">
      <div class="team">
        <h2>{teamName}</h2>
        <ul>
          {students.map((student) => (
            <li>{`${student.name}`}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
