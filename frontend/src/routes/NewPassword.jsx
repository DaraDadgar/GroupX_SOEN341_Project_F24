import { useNavigate } from "react-router-dom";

export default function NewPassword() {
    const navigate = useNavigate();
    return (
    <main className="reset-password">
        <h2>PASSWORD RECOVERY</h2>

        <form method="post">
            <span>You can now set your new password!</span>
          <div className="fields">
            <label>New Password:</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              maxLength="32"
              required
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              id="confirm-new-password"
              name="confirm-new-password"
              maxLength="32"
              required
            />
          </div>

        

          <input type="submit" value="Submit" onClick={() => navigate("/new-password")}/>
        </form>
    </main>
    )
};