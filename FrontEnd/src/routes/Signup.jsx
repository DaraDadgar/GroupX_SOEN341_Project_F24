import { useState } from "react";
import "../css/main-signup.css";

export default function Signup() {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST", // Specify the method as POST
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({
          username: username,
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          user_type: userType,
        }), // Replace with your JSON data
      });

      const data = await response.json();
      console.log("Response from Flask:", data); // Log the response to the console
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <main className="main-signup">
      <h2>SIGN UP</h2>

      <form onSubmit={handleSubmit}>
        <div className="fields">
          <label>User Type: </label>
          <div className="radio-button">
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

          <label>Username:</label>
          <input
            type="text"
            id="username"
            placeholder="JaneDoe98"
            name="username"
            minLength="5"
            maxength="20"
            pattern="^[a-zA-Z][a-zA-Z0-9]+$"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>First Name:</label>
          <input
            type="text"
            id="first-name"
            placeholder="Jane"
            name="first-name"
            minLength="2"
            maxLength="30"
            pattern="^[a-zA-Z]+$"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name:</label>
          <input
            type="text"
            id="last-name"
            placeholder="Doe"
            name="last-name"
            minLength="2"
            maxLength="50"
            pattern="^[a-zA-Z]+$"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            name="email"
            maxLength="254"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            minLength="8"
            maxLength="32"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            name="confirm-password"
            minLength="8"
            maxLength="32"
            required
          />
        </div>

        <input type="submit" value="Create Account" />

        <span className="already-account-option" title="Click here to log in">
          Already have an account?
        </span>
      </form>
    </main>
  );
}
