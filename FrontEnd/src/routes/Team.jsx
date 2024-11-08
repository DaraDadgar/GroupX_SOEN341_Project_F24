import { useEffect, useState } from "react";
import "../css/main-teacher.css";

import { fetchProtectedAPI } from "../functions/apiinterface";
import { useNavigate } from "react-router-dom";

export default function MyTeam() {
  const x = 1;
  return (
    <main className="main-teacher">
      <div className="instructor">
        <h2 style={{ marginTop: "50px" }}> Your Team:</h2>
      </div>
      {x ? (
        <Team
          team={{ id: 1, name: "Kilo Khara" }}
          students={[
            { id: 1, name: "Student A" },
            { id: 2, name: "Student B" },
          ]}
        />
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
          <button className="evaluate">Evaluate a Team Member</button>
        </div>
      </ul>
    </div>
  );
}

function NoTeam() {
  return <h1>No Teams Created</h1>;
}
