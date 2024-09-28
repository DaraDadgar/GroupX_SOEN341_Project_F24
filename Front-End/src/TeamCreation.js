import "./css/team-creation.css";

export default function TeamCreation({ students }) {
  return (
    <main class="main-teamcreation">
      <form class="students">
        <div class="top-display">
          <h2>Team Name:</h2>
          <div class="team-name">
            <input
              type="text"
              maxlength="60"
              placeholder="Enter the team name"
              pattern=".*\S.*"
              required
            ></input>
          </div>
        </div>
        <h2>Select The Team Members:</h2>
        <ul>
          {students.map((student, index) => (
            <li>
              <label>
                <input
                  type="checkbox"
                  name={"student " + index}
                  value={student.lastName + " " + student.firstName}
                />
                {`${student.lastName}, ${student.firstName}`}
              </label>
            </li>
          ))}
        </ul>
        <div class="buttons">
          <button>Cancel</button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </main>
  );
}
