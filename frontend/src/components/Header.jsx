import "../css/header.css";
import logo from "../assets/header.png"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/useAuth";
import homeIcon from "../pictures/home.png";
import { jwtDecode } from "jwt-decode";

export default function Header() {
  const { token } = useAuth();

  return (
    <header>
      <img src={logo} alt="Flowers in Chania" className="logo"></img>
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
  const user_info = jwtDecode(token);
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
