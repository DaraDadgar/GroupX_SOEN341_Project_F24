import "../css/Instructor.css";
import { Link } from "react-router-dom";

export default function Instructor() {
  return (
    <main>
      <div className="instructor header">
        <h2 style={{ marginTop: "50px" }}> Teams Created:</h2>
        <div className="buttons">
          <button style={{ marginTop: "-20px" }}> Create a New Team</button>
        </div>
      </div>
      <div className="instructor header">
      <ul style={{ marginTop: "20px", padding: '25px', color: 'white', textAlign: 'center' }}>
        <table style={{ marginBottom: "20px"}}>
          <tr>
            <th style={{padding:'25px'}}>Team X</th>
            <th style={{padding:'25px'}}>Cooperation</th>
            <th style={{padding:'25px'}}>Conceptutal Contribution</th>
            <th style={{padding:'25px'}}>Practical Contribution</th>
            <th style={{padding:'25px'}}>Work Ethic</th>
            <th style={{padding:'25px'}}>Average</th>
            <th style={{padding:'25px'}}>Evaluations</th>
          </tr>
          <tr>
            <td style={{borderBottom:'2px solid white'}}> Name 1</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
          <tr>
            <td style={{borderBottom:'2px solid white'}}>Name 2</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
          <tr>
          <td style={{borderBottom:'2px solid white'}}>Name 3</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
          <tr>
          <td style={{borderBottom:'2px solid white'}}>Name 4</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
        </table><div className="delEdit" >
            <button
              className="delete"
              onClick={() => {
                confirm("Are you sure you want to delete this team?");
              }}
            >
              DELETE
            </button>
            <button className="edit">EDIT</button>
            <button className="more" ><Link to="/dashboard">MORE</Link></button>
          </div></ul>
          <ul style={{ marginTop: "20px", padding: '25px', color: 'white', textAlign: 'center' }}>
        <table style={{ marginBottom: "20px"}}>
          <tr>
            <th style={{padding:'25px'}}>Team Y</th>
            <th style={{padding:'25px'}}>Cooperation</th>
            <th style={{padding:'25px'}}>Conceptutal Contribution</th>
            <th style={{padding:'25px'}}>Practical Contribution</th>
            <th style={{padding:'25px'}}>Work Ethic</th>
            <th style={{padding:'25px'}}>Average</th>
            <th style={{padding:'25px'}}>Evaluations</th>
          </tr>
          <tr>
            <td style={{borderBottom:'2px solid white'}}> Name 1</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
          <tr>
            <td style={{borderBottom:'2px solid white'}}>Name 2</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
          <tr>
          <td style={{borderBottom:'2px solid white'}}>Name 3</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
          <tr>
          <td style={{borderBottom:'2px solid white'}}>Name 4</td>
            <td style={{borderBottom:'2px solid white'}}>2</td>
            <td style={{borderBottom:'2px solid white'}}>3</td>
            <td style={{borderBottom:'2px solid white'}}>etc..</td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
            <td style={{borderBottom:'2px solid white'}}></td>
          </tr>
        </table><div className="delEdit" >
            <button
              className="delete"
              onClick={() => {
                confirm("Are you sure you want to delete this team?");
              }}
            >
              DELETE
            </button>
            <button className="edit">EDIT</button>
            <button className="more"><Link to="/dashboard">MORE</Link></button>
            
          </div></ul>
      </div>

      <div style={{
      position: 'fixed', // Keeps the button fixed at the bottom right
      right: '20px', // Space from the right edge of the screen
      bottom: '20px', // Space from the bottom edge of the screen
    }}>
      <button style={{
        padding: '10px 20px', // Padding around the text inside the button
        fontSize: '16px', // Font size of the button text
        borderRadius: '5px', // Rounded corners of the button
        backgroundColor: '#4CAF50', // Background color of the button
        color: 'white', // Text color
        border: 'none', // No border for a cleaner look
        cursor: 'pointer', // Cursor changes to pointer when hovering over the button
      }} onClick={() => {
        // Function to handle the download action
        alert('Starting download...'); // Placeholder function
      }}>
        Download
      </button>
    </div>

    </main>
  );
}
