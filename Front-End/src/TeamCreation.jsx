import "./css/team-creation.css";
import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import { useNavigate } from "react-router-dom";
import { fetchAPI, storeAPI } from "./apiinterface";
import { useEffect, useState } from "react";
export default function TeamCreation() {
  
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetchAPI("/students");
        const filteredStudents = response.map(({ id, name, email }) => ({ id, name, email }));
        setStudents(filteredStudents);
      } catch (error) {
        console.error("Error fetching team data: ", error);
      }
    };

    fetchStudents();
  }, []);


  const SubmitHandler = (e) => {
    e.preventDefault();
  
    const teamName = e.target.name.value;
    const selectedEmails = students
      .filter((student) => e.target[student.id].checked)
      .map((student) => student.email);
  
    const payload = { name: teamName, student_emails: selectedEmails };
  
    storeAPI("/teams", payload)
      .then((response) => {
        console.log("Team created successfully:", response);
      })
      .catch((error) => {
        console.error("Error creating team:", error);
      });
  };
  

  return (
<>
    <Header />
    <NavBar />

    <div>
    <main className="main-teamcreation">
      <form onSubmit = {SubmitHandler} className="students">
        <div className="top-display">
          <h2>Team Name:</h2>
          <div className="team-name">
            <input
              type="text"
              maxlength="60"
              placeholder="Enter the team name"
              pattern=".*\S.*"
              name = "name"
              required
            ></input>
          </div>
        </div>
        <h2>Select The Team Members:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <label>
                <input type="checkbox" name={student.id}/>
                {student.name} (ID: {student.id}, Email: {student.email})
              </label>
            </li>
          ))}
        </ul>
    <div className="buttons">
    <button style={{marginLeft: "155px"}}>Cancel</button>
    <button type="submit" style={{marginLeft: "30px"}}>Confirm</button>
  </div>
  </form>
  </main>
  </div>
  </>
  );
}