import "../css/evaluation.css";

export default function Evaluation({ Student }) {
  return (
    <main className="main-eval">
      <h2>Teammate Evaluation:</h2>
      <p>You are currently evaluating {Student.name}'s performance.</p>

      <h2>Cooperation</h2>
      <p>[Give a brief description of what cooperation dimension covers.]</p>

      <form>
        <h3>1- First Question:</h3>
        <Scale number="1" />
        <h3>2- Second Question:</h3>
        <Scale number="2" />
        <h3>3- Third Question:</h3>
        <Scale number="3" />
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

function Scale({ number }) {
  return (
    <div className="scale">
      <label>
        <input type="radio" name={"score-" + number} value="1" required />
        <span className="checkmark"></span> 1
      </label>
      <label>
        <input type="radio" name={"score-" + number} value="2" />
        <span className="checkmark"></span> 2
      </label>
      <label>
        <input type="radio" name={"score-" + number} value="3" />
        <span className="checkmark"></span> 3
      </label>
      <label>
        <input type="radio" name={"score-" + number} value="4" />
        <span className="checkmark"></span> 4
      </label>
      <label>
        <input type="radio" name={"score-" + number} value="5" />
        <span className="checkmark"></span> 5
      </label>
    </div>
  );
}
