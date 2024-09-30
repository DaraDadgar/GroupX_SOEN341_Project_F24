import { useEffect } from "react";
import "../css/header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate()
  const signupNav = () =>{
    navigate("../signup")
  }
  const loginNav = () => {
    navigate("../login")
  }
  
  return (
    <header>
      <h1>Peer Assessment Tool</h1>
      <span class = "filler"></span>
      <span class="sign-up" onClick = {signupNav}>SIGN UP</span>
      <span class="login" onClick = {loginNav}>LOGIN</span>
    </header>
  );
}
