import "./css/main-signup.css";

export default function MainSignup() {
  return (
    <main class="main-signup">
      <h2>SIGN UP</h2>

      <form action="#" method="post">
        <div class="fields">
          <label for="usertype">User Type: </label>
          <div class="radio-button">
            <label>
              Student
              <input type="radio" name="usertype" value="student" required />
            </label>

            <label>
              Teacher
              <input type="radio" name="usertype" value="teacher" required />
            </label>
          </div>

          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="JaneDoe98"
            name="username"
            minlength="5"
            maxlength="20"
            pattern="^[a-zA-Z][a-zA-Z0-9]+$"
            required
          />

          <label for="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            placeholder="Jane"
            name="first-name"
            minlength="2"
            maxlength="30"
            pattern="^[a-zA-Z]+$"
            required
          />

          <label for="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            placeholder="Doe"
            name="last-name"
            minlength="2"
            maxlength="50"
            pattern="^[a-zA-Z]+$"
            required
          />

          <label for="email">Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            name="email"
            maxlength="254"
            required
          />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            minlength="8"
            maxlength="32"
            required
          />

          <label for="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            name="confirm-password"
            minlength="8"
            maxlength="32"
            required
          />
        </div>

        <input type="submit" value="Create Account" />

        <span class="already-account-option" title="Click here to log in">
          Already have an account?
        </span>
      </form>
    </main>
  );
}
