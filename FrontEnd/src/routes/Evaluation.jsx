import "../css/evaluation.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Evaluation() {
  const navigate = useNavigate();
  const back = () => navigate("/student/select-teammate");

  const [student, setStudent] = useState({ id: 0, name: "None" });

  useEffect(() => {
    const user_info = JSON.parse(localStorage.getItem("teammate"));
    setStudent(user_info);
  }, []);

  return (
    <main className="main-eval">
      <h2>Teammate Evaluation:</h2>
      <p>
        You are currently evaluating the performance of{" "}
        <span>{student.name}</span>.
      </p>
      <form>
        <h2>Cooperation</h2>
        <ul>
          <li>Actively participating in meetings; </li>
          <li>Communicating within the group; </li>
          <li>Cooperating within the group;</li>
          <li>Assisting team-mates when needed;</li>
          <li>Volunteering for tasks. </li>
        </ul>

        <h3>Make Your Selection:</h3>
        <Scale number="1" />

        <h2>Conceptual Contribution</h2>
        <ul>
          <li>Researching and gathering information; </li>
          <li>Quality of individual contribution; </li>
          <li>Suggesting ideas;</li>
          <li>Tying ideas together; </li>
          <li>Identifying difficulties;</li>
          <li>Identifying effective approaches </li>
        </ul>

        <h3>Make Your Selection:</h3>
        <Scale number="2" />

        <h2>Practical Contribution</h2>
        <ul>
          <li>Writing of the report(s); </li>
          <li>Reviewing others’ report(s) or section(s); </li>
          <li>
            Providing constructive feedback on the report(s) or the
            presentation;
          </li>
          <li>Contributing to the organization of the work; </li>
          <li>
            Contributing to the preparation of presentation(s) (if appropriate).{" "}
          </li>
        </ul>
        <h3>Make Your Selection:</h3>
        <Scale number="3" />

        <h2>Work Ethic</h2>
        <ul>
          <li>Displaying a positive attitude; </li>
          <li>Respecting teammates; </li>
          <li>Respecting commitments;</li>
          <li>Respecting deadlines; </li>
          <li>Respecting teammates ideas.</li>
        </ul>
        <h3>Make Your Selection:</h3>
        <Scale number="4" />

        <h2>Additional Comments</h2>
        <p>Leave any additional comments in the text below:</p>
        <textarea
          id="comments"
          name="comments"
          maxLength="500"
          rows="6"
          cols="100"
          required
        ></textarea>
        <button onClick={back}>Cancel</button>
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
