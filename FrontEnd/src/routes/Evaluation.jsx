import "../css/evaluation.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { storeProtectedAPI } from "../functions/apiinterface";
import { jwtDecode } from "jwt-decode";

export default function Evaluation() {
  const navigate = useNavigate();
  const back = () => navigate("/student/select-teammate");
  const home = () => navigate("/student/home");

  const [student, setStudent] = useState({ id: 0, name: "Error" });

  useEffect(() => {
    const user_info = JSON.parse(localStorage.getItem("teammate"));
    setStudent(user_info);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const token = localStorage.getItem("token");
    const user_info = jwtDecode(token).sub;
    const data = {
      sender_id: user_info.user_id,
      receiver_id: student.id,
      cooperation_score: payload["score-1"],
      conceptual_contribution_score: payload["score-2"],
      practical_contribution_score: payload["score-3"],
      work_ethic_score: payload["score-4"],
      comments: payload["comments"],
    };
    storeProtectedAPI("/assessments", data, token).then((response) => {
      response.data.Response || home();
    });

    /*storeProtectedAPI("/assessments", data, token);*/
  };

  return (
    <main className="main-eval">
      <h2>Teammate Evaluation:</h2>
      <p>
        You are currently evaluating the performance of{" "}
        <span>{student.name}</span>.
      </p>
      <form onSubmit={submitHandler}>
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