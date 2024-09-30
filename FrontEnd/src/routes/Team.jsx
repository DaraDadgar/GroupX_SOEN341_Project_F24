import { useEffect, useState } from "react";
import "../css/main-student.css";
import { fetchAPI } from "../functions/apiinterface";

export default function Team() {
  const [teamName, setTeamName] = useState([]);
  const [teammates, setTeammates] = useState([]);

  // useEffect(() => {
  //   const response = fetchAPI("display_my_team").then(data => console.log(data))
  // })
 useEffect(() => {

   const fetch = async () => {
    fetchAPI("display_my_team").then(
     data => {
       setTeammates(data.data.students)
       setTeamName(data.data.team_id)
     }
   )}

   fetch()
 }, [])
  



  return (


    <main class="main-student">
      <div class="team">
        <h2>{teamName}</h2>
        <ul>
          {teammates.map((teammate) => (
            <li>{`${teammate.name}`}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
