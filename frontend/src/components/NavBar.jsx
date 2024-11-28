import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/features">FEATURES</Link>
        <Link to="/instructors">INSTRUCTORS</Link>
        <Link to="/about">ABOUT US</Link>
      </ul>
    </nav>
  );
}
