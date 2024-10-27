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
        setStudents(response);
      } catch (error) {
        console.error("Error fetching team data: ", error);
      }
    };

    fetchStudents();
  }, []);


  const navigate = useNavigate();

  const handleCheckboxChange = (studentId) => {
    if(selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)
    const students = [1,2,3]
    for(const key in payload){
      if(key != "name"){
        students.push(key)
      }
    }
    const realPayload = {name: payload.name, students : students}
    storeAPI("/create_team", realPayload)
  }

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
                <input type="checkbox"/>
                {student.name} (ID: {student.id})
              </label>
            </li>
          ))}
        </ul>
      </form>
    </main>
    <div className="buttons">
    <button style={{marginLeft: "155px"}}>Cancel</button>
    <button type="submit" style={{marginLeft: "30px"}}>Confirm</button>
  </div></div>

  </>
  );
}