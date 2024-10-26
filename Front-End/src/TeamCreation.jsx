import "./css/team-creation.css";
import { useNavigate } from "react-router-dom";
import { fetchAPI, storeAPI } from "./apiinterface";
import { useEffect, useState } from "react";
export default function TeamCreation() {
  
    const [students, setStudents] = useState([]);

    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const response = await fetchAPI("/students");
          const data = await response.json();
          setStudents(data);
        } catch (error) {
          console.error("Error fetching team data: ", error);
        }
      };

      fetchStudents();
    }, []);


  const navigate = useNavigate()
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
    <div>
    <main class="main-teamcreation">
      <form onSubmit = {SubmitHandler} class="students">
        <div class="top-display">
          <h2>Team Name:</h2>
          <div class="team-name">
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
    <div class="buttons">
    <button style={{marginLeft: "155px"}}>Cancel</button>
    <button type="submit" style={{marginLeft: "30px"}}>Confirm</button>
  </div></div>
  );
}