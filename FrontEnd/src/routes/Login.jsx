import "../css/main-login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";

export default function Login() {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          user_type: userType,
        }),
      });

      if (response.ok) {
        const { access_token, user_type, user_info } = await response.json();
        console.log("Login successful:", access_token);
        console.log(user_info, user_type);
        /*localStorage.setItem("token", data["access_token"]); */
        login(access_token, user_type);
        localStorage.setItem("user_info", JSON.stringify(user_info));

        if (user_type === "student")
          navigate("/student/home", { replace: true });
        else if (user_type === "teacher")
          navigate("/teacher/home", { replace: true });
        else console.log("User type is not recognized");
        // Redirect to user info page, or use a router to navigate
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <main className="main-login">
      <h2>LOG IN</h2>

      <form onSubmit={handleSubmit}>
        <div className="fields">
          <div className="usertype">
            <label>User Type: </label>
            <div>
              <label>
                Student
                <input
                  type="radio"
                  name="usertype"
                  value="student"
                  required
                  onChange={(e) => setUserType(e.target.value)}
                />
              </label>

              <label>
                Teacher
                <input
                  type="radio"
                  name="usertype"
                  value="teacher"
                  required
                  onChange={(e) => setUserType(e.target.value)}
                />
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
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            maxLength="32"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link className="link">Forgot your password?</Link>

        <Link to="/signup" className="link">
          Don't have an account?
        </Link>

        <input type="submit" value="Log in" />
      </form>
    </main>
  );
}
