import "./css/main-login.css";

export default function MainLogin() {
  return (
    <main class="main-login">
      <h2>LOG IN</h2>

      <form action="#" method="post">
        <div class="fields">
          <div class="usertype">
            <label for="usertype">User Type: </label>
            <div>
              <label>
                Student
                <input type="radio" name="usertype" value="student" required />
              </label>

              <label>
                Teacher
                <input type="radio" name="usertype" value="teacher" required />
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

        <span title="Click here get your password">Forgot your password?</span>

        <span title="Click here to sign up">Don't have an account?</span>

        <input type="submit" value="Log in" />
      </form>
    </main>
  );
}
