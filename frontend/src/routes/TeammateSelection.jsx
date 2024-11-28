import { useState, useEffect } from "react";
import "../css/team-creation.css";

import {fetchProtectedAPI} from "../functions/apiinterface";
import { useNavigate } from "react-router-dom";

export default function TeammateSelection() {
  const navigate = useNavigate();
  const back = () => navigate("/student/home");
  const [students, setStudents] = useState([
    { id: 1, name: "RR" },
    { id: 2, name: "VV" },
  ]);

  const fetchTeammates = async () => {
    const token = localStorage.getItem("token");
    await fetchProtectedAPI("/students/team", token).then(async (response) => {
      await fetchProtectedAPI(
        `/teams/${response.data.Team.id}/teammates`,
        token
      ).then((response) => setStudents(response.data));
    });
  };

  useEffect(() => {
    fetchTeammates();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    localStorage.setItem("teammate", payload["teammate"]);
    navigate("/student/evaluation");
  };

  return (
    <main className="main-teamcreation">
      <form className="students" onSubmit={submitHandler}>
        <h2>Select a Team Member to Evaluate:</h2>
        {students.length ? (
          <>
            <ul>
              {students.map((student) => (
                <li key={student.id}>
                  <label>
                    <input
                      type="radio"
                      name="teammate"
                      value={JSON.stringify({
                        id: student.id,
                        name: student.name,
                      })}
                      data-testid={student.name}
                      required
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
            <h1 data-testid="emptyStudents">No Students to Assess</h1>
            <div className="buttons">
              <button onClick={back}>Back</button>
            </div>
          </>
        )}
      </form>
    </main>
  );
}
