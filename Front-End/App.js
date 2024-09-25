import "./index.css";

export default function App() {
  return <Login />;
}

function Login() {
  return (
    <>
      <header>Rate My Classmates ✅</header>

      <div className="login-window">
        <h1>Log In</h1>
        <form action="/login" method="post">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit">Log In</button>
          <a href="#" class="forgot-password">
            Forgot password?
          </a>
          <span className="or">or</span>
        </form>
        <button className="create-account">Create New Account</button>
      </div>
    </>
  );
}
