import "../css/Instructor.css";
export default function Instructor() {
  return (
    <main>
      <div className="instructor header">
        <h2 style={{ marginTop: "50px" }}> Teams Created:</h2>
        <div className="buttons">
          <button style={{ marginTop: "-20px" }}> Create a New Team</button>
        </div>
      </div>
      <div className="instructor header">
        <ul style={{ marginTop: "20px" }}>
          <h3>Team X</h3>
          <li> Name 1</li>
          <li> Name 2</li>
          <li> Name 3</li>
          <li> Name 1</li>
          <li> Name 2</li>
          <li> Name 3</li>
          <li> Name 1</li>
          <li> Name 2</li>
          <li> Name 3</li>
          <li> Etc</li>
          <div className="delEdit">
            <button
              className="delete"
              onClick={() => {
                confirm("Are you sure you want to delete this team?");
              }}
            >
              DELETE
            </button>
            <button className="edit">EDIT</button>
          </div>
        </ul>
        <ul style={{ marginTop: "20px" }}>
          <h3>Team Y</h3>
          <li> Name 1</li>
          <li> Name 2</li>
          <li> Name 3</li>
          <li> Etc</li>
          <div className="delEdit">
            <button
              className="delete"
              onClick={() => {
                confirm("Are you sure you want to delete this team?");
              }}
            >
              DELETE
            </button>
            <button className="edit">EDIT</button>
          </div>
        </ul>
      </div>
    </main>
  );
}
