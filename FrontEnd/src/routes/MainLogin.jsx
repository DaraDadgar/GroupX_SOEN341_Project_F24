import "../css/main-login.css";
import "../css/general.css";
import { storeAPI, fetchAPI } from "../functions/apiinterface.jsx";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";

export default function MainLogin() {
  const navigate = useNavigate();
  const signupNav = () => {
    navigate("../signup");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    storeAPI("/login", payload).then((data) => {
      if (data.data.Response == "VALID" && data.data.type == "student") {
        navigate("/Team");
      } else if (
        data.data.Response == "VALID" &&
        data.data.type == "teacher"
      ) {
        navigate("/Teacher");
      }
    });
  };

  return (
    <>
      <main class="main-login">
        <h2>LOG IN</h2>

        <form onSubmit={submitHandler} method="post">
          <div class="fields">
            <div class="usertype">
              <label for="usertype">User Type: </label>
              <div>
                <label>
                  Student
                  <input type="radio" name="type" value="student" required />
                </label>

                <label>
                  Teacher
                  <input type="radio" name="type" value="teacher" required />
                </label>
              </div>
            </div>

            <label for="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              maxlength="254"
              required
            />

            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              maxlength="32"
              required
            />
          </div>

          <span title="Click here get your password">
            Forgot your password?
          </span>

          <span onClick={signupNav} title="Click here to sign up">
            Don't have an account?
          </span>

          <input type="submit" value="Log in" />
        </form>
      </main>
    </>
  );
}
