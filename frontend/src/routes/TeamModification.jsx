import "../css/team-modification.css";
function TeamModification() {
  return (
    <>
      <div className="main-teamcreation">
        <h2 style={{ marginTop: "50px" }}> Current Members:</h2>
        <ul>
          <li>
            <span>Name X</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
          <li>
            <span>Name Y</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
          <li>
            <span>Name Z</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
          <li>
            <span>Name K</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
        </ul>
        <h2 style={{ marginTop: "50px" }}> Other Students:</h2>
        <ul>
          <li>
            <span>Name X</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
          <li>
            <span>Name Y</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
          <li>
            <span>Name Z</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
          <li>
            <span>Name K</span>
            <div className="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
        </ul>
        <div className="buttons">
          <button style={{ marginLeft: "155px" }}>Cancel</button>
          <button type="submit" style={{ marginLeft: "30px" }}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default TeamModification;
