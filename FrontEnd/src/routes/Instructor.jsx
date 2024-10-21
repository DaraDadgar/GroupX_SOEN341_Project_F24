import "../css/Instructor.css";
function Instructor() {
  return (
    <>
      <div class="instructor header">
        <h2 style={{ marginTop: "50px" }}> Teams Created:</h2>
        <div class="buttons">
          <button style={{ marginTop: "-20px" }}> Create a New Team</button>
        </div></div>
        <div class="instructor header">
        <ul style={{ marginTop: "20px" }}>
          <h3>Team X</h3>
          <li> Name 1</li>
          <li> Name 2</li>
          <li> Name 3</li>
          <li> Etc</li>
          <div class="delEdit">
          <button class="delete">DELETE</button>
          <button class="edit">EDIT</button>
          </div>
        </ul>
        <ul style={{ marginTop: "20px" }}>
          <h3>Team Y</h3>
          <li> Name 1</li>
          <li> Name 2</li>
          <li> Name 3</li>
          <li> Etc</li>
          <div class="delEdit">
          <button class="delete">DELETE</button>
          <button class="edit">EDIT</button>
          </div>
        </ul>
        </div>
    </>
  );
}

export default Instructor;
