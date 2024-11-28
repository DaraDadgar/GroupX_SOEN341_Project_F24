import "../css/reset-password.css";
import { useNavigate } from "react-router-dom";


export default function ResetPassword() {
    const navigate = useNavigate();
    return (
    <main className="reset-password">
        <h2>PASSWORD RECOVERY</h2>

        <form method="post">
            <span>Forgot your password?</span>
            <span>We got you covered!</span>
            <span>Simply enter your email address below and the password recovery will begin.</span>
          <div className="fields">

            <label>Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              maxLength="254"
              required
            />
          </div>

        

          <input type="submit" value="Submit" onClick={() => navigate("/new-password")}/>
        </form>
    </main>
    );
}