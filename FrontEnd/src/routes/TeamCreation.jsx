import { useEffect } from "react";
import { useState } from "react";
import "../css/team-creation.css";

import {
  fetchProtectedAPI,
  storeProtectedAPI,
} from "../functions/apiinterface";
import { useNavigate } from "react-router-dom";

export default function TeamCreation() {
  const navigate = useNavigate();
  const back = () => navigate("/teacher/home");
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchProtectedAPI("/students/available", token).then((data) => {
      setStudents(data.data);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const team_name = payload["name"];
    const team_students = [];
    for (let i = 0; i < students.length; i++) {
      const student = payload[`student-${i}`];
      if (student) {
        team_students.push(payload[`student-${i}`]);
      }
    }

    const token = localStorage.getItem("token");
    const data = { name: team_name, student_emails: team_students };

    storeProtectedAPI("/teams", data, token).then(() => {
      navigate("/teacher/home");
    });
  };
  return (
    <main className="main-teamcreation">
      <form className="students" onSubmit={submitHandler}>
        <div className="top-display">
          <h2>Team Name:</h2>
          <div className="team-name">
            <input
              type="text"
              name="name"
              maxLength="60"
              placeholder="Enter the team name"
              pattern=".*\S.*"
              required
            ></input>
          </div>
        </div>
        <h2>Select The Team Members:</h2>
        {students.length ? (
          <>
            <ul>
              {students.map((student, index) => (
                <li key={student.id}>
                  <label>
                    <input
                      type="checkbox"
                      name={`student-${index}`}
                      value={student.email}
                    />
                    {student.name}
                  </label>
                </li>
              ))}
            </ul>
            <div className="buttons">
              <button onClick={back}>Cancel</button>
              <button type="submit">Confirm</button>
            </div>{" "}
          </>
        ) : (
          <>
            <h1>No Students Currently Available</h1>
            <div className="buttons">
              <button onClick={back}>Back</button>
            </div>
          </>
        )}
      </form>
    </main>
  );
}
