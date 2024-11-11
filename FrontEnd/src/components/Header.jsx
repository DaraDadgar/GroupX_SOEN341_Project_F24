import "../css/header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/useAuth";
import homeIcon from "../pictures/home.png";
import { jwtDecode } from "jwt-decode";

export default function Header() {
  const { token } = useAuth();

  return (
    <header>
      <h1>Peer Assessment Tool</h1>
      {token ? <LoggedIn /> : <LoggedOut />}
    </header>
  );
}

function LoggedOut() {
  const navigate = useNavigate();
  const signupNav = () => {
    navigate("/signup");
  };
  const loginNav = () => {
    navigate("/login");
  };
  return (
    <div className="topright-display">
      <span className="sign-up" onClick={signupNav}>
        SIGN UP
      </span>

      <span className="login" onClick={loginNav}>
        LOGIN
      </span>
    </div>
  );
}

function LoggedIn() {
  const { token, role, logout } = useAuth();
  const user_info = jwtDecode(token).sub;
  const title =
    role === "student" ? user_info.user_name : "Prof " + user_info.user_name;

  const navigate = useNavigate();
  const homeNav = () => {
    navigate(`/${role}/home`);
  };
  return (
    <div className="topright-display">
      <div className="top-name">{title}</div>
      <img src={homeIcon} alt="home" onClick={homeNav} />

      <span className="logout" onClick={logout}>
        LOG OUT
      </span>
    </div>
  );
}
