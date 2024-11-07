import "../css/header-logout.css";
import { fetchAPI } from "../functions/apiinterface";
import { useNavigate } from "react-router-dom";

export default function HeaderLogout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await fetchAPI("/logout");
      navigate("/MainLogin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header>
      <h1>Peer Assessment Tool</h1>
      <button className="logout" onClick={handleLogout}>LOGOUT</button>
    </header>
  );
}