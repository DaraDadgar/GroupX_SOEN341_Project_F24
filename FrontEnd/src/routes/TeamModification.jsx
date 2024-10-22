import "../css/TeamModification.css";
function TeamModification() {
  return (
    <>
      <div class="main-teamcreation">
        <h2 style={{ marginTop: "50px" }}> Current Members:</h2>
        <ul>
          <li>
            <span>Name X</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
          <li>
            <span>Name Y</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
          <li>
            <span>Name Z</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
          <li>
            <span>Name K</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>－</button>
            </div>
          </li>
        </ul>
        <h2 style={{ marginTop: "50px" }}> Other Students:</h2>
        <ul>
        <li>
            <span>Name X</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
          <li>
            <span>Name Y</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
          <li>
            <span>Name Z</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
          <li>
            <span>Name K</span>
            <div class="buttons">
              <button style={{ fontWeight: "bolder" }}>＋</button>
            </div>
          </li>
        </ul>
        <div class="buttons">
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
