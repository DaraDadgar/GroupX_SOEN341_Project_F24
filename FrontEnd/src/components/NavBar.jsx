import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/">FEATURES</Link>
        <Link to="/instructor">INSTRUCTORS</Link>
        <Link to="/teacher/courses">COURSES</Link>
        <Link to="/about">ABOUT US</Link>
      </ul>
    </nav>
  );
}
