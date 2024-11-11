import "../css/main-login.css";
import "../css/general.css";
import { storeAPI } from "../functions/apiinterface.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/useAuth.jsx";

export default function MainLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const signupNav = () => {
    navigate("../signup");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    storeAPI("/login", payload).then((data) => {
      if (data.data.Response == "VALID") {
        login(data.data.token, data.data.type);

        data.data.type == "student"
          ? navigate("/student/home")
          : navigate("/teacher/home");
      } else {
        console.log(data.data.Message);
      }
    });
  };

  return (
    <>
      <main className="main-login">
        <h2>LOG IN</h2>

        <form onSubmit={submitHandler} method="post">
          <div className="fields">
            <div className="usertype">
              <label>User Type: </label>
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

            <label>Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              maxLength="254"
              required
            />

            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              maxLength="32"
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
