import "./css/team-creation.css";
import HeaderLogout from './components/HeaderLogout.jsx'
import NavBar from './components/NavBar.jsx'
import { fetchAPI, storeAPI } from "./functions/apiinterface";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function TeamCreation() {
  
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();

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

  const handleCheckboxChange = (email) => {
    setSelectedStudents(prevSelected => 
      prevSelected.includes(email)
        ? prevSelected.filter(studentEmail => studentEmail !== email)
        : [...prevSelected, email]
    );
  };

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!teamName.trim() || selectedStudents.length === 0) {
      alert("Please enter a team name and selest at least one student.");
      return;
    }

    try {
      const data = {
        name: teamName,
        student_emails: selectedStudents,
      };
      const response = await storeAPI("/teams", data);
      console.log("Team created successfully: ", response);
      alert("Team created successfully!");
      setTeamName("");
      setSelectedStudents([]);
      navigate("/MainTeacher"); 
    } catch (error) {
      console.log("Error creating team:", error);
      alert("Failed to create the team.");
    }
  };

  return (
<>
    <HeaderLogout />
    <NavBar />

    <div>
    <main className="main-teamcreation">
      <form onSubmit = {handleSubmit} className="students">
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
              value={teamName}
              onChange={handleTeamNameChange}
            />
          </div>
        </div>
        <h2>Select The Team Members:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <label>
                <input 
                type="checkbox" 
                name={student.id}
                checked={selectedStudents.includes(student.email)}
                onChange={() => handleCheckboxChange(student.email)}
                />
                {student.name} (ID: {student.id}, Email: {student.email})
              </label>
            </li>
          ))}
        </ul>
    <div className="buttons">
    <button type="button" style={{marginLeft: "155px"}}>Cancel</button>
    <button type="submit" style={{marginLeft: "30px"}}>Confirm</button>
  </div>
  </form>
  </main>
  </div>
  </>
  );
}