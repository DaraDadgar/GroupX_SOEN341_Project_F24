import logo from "./logo.svg";
import "./index.css";

export default function App() {
  return <Login />;
}

function Login() {
  return (
    <>
      <header>Rate My Classmates ✅</header>

      <div className="fields">
        <h1>Log In</h1>
        <input placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Log In</button>
        <span className="forgot-account">Forgot account?</span>
        <span className="or">or</span>
        <button>Create New Account</button>
      </div>
    </>
  );
}
