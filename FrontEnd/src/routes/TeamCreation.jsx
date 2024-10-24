import "../css/team-creation.css";
import { useNavigate } from "react-router-dom";
import { fetchAPI, storeAPI } from "../functions/apiinterface";
export default function TeamCreation({students}) {
  

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
            <li>
              <label>
                <input
                  type="checkbox"
                  name={student.id}
                  value={student.email + " " + student.id}
                />
                {`${student.name}, ${student.email}, ${student.id}`}
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
