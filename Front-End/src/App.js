import "./css/general.css";
import Header from "./Header";
import NavBar from "./NavBar";
import MainLogin from "./MainLogin";
import MainSignup from "./MainSignup";
import Signup from "./Signup";
import Teams from "./MainTeacher";
import Team from "./MainStudent";
import TeamCreation from "./TeamCreation";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const stlist = [
  { firstName: "Marc", lastName: "Hab" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
  { firstName: "Daniel", lastName: "Sec" },
];

const teams = [
  { teamName: "Team X", students: stlist },
  { teamName: "Team X", students: stlist },
  { teamName: "Team X", students: stlist },
  { teamName: "Team X", students: stlist },
];

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={Signup} />
        </Routes>
      </Router>
      <Header />
      <NavBar />
      <TeamCreation students={stlist} />
    </>
  );
}

export default App;
