import "../css/Instructor.css";
export default function Dashboard() {
  return (
    <main>
      <div className="instructor header">
        <h2 style={{ marginTop: "50px" }}> Team X:</h2>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody class="dashboardTable">
        <ul>
        <tr>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange', paddingLeft: '160px'}}>Student 1</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange', paddingLeft: '160px' }}>Student 2</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange', paddingLeft: '160px' }}>Student 3</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange', paddingLeft: '160px' }}>Student 4</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
          <td style={{ textAlign: 'center', padding: '10px', fontSize: '16px', color: 'orange' }}>★</td>
        </tr>
        </ul>

        <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Student 1:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {/* Row 1 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', paddingLeft: '80px', paddingRight: '50px', textAlign: 'center', width: '100px', height: '50px', color: 'orange'}}>Cooperation</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'orange' }}>Conceptual Contribution</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Practical Contribution</td>
            <td style={{ border: '1px solid black', paddingLeft: '55px', paddingRight: '55px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Work Ethic</td>
            <td style={{ border: '1px solid black', paddingLeft: '70px', paddingRight: '70px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Average</td>
          </tr>
          {/* Row 2 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black'}}>1</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color:'black'}}>4</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}>ETC..</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}></td>
          </tr>
          {/* Row 3 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'white' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
          {/* Row 4 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
          </tr>
          {/* Row 5 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Comments Recieved:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <div 
        style={{
          width: '900px', // Width of the box
          height: '100px', // Height of the box
          padding: '10px', // Padding inside the box
          fontSize: '16px', // Text font size
          border: '1px solid #808080', // Dark grey border
          borderRadius: '5px', // Rounded corners
          backgroundColor: '#ffffff', // Background color of the box
          display: 'flex', // Using flex to align content (if any in the future)
          alignItems: 'center', // Centering content vertically
          justifyContent: 'center', // Centering content horizontally
          color: '#808080' // Text color
        }}
      >
        {/* This div remains empty as a placeholder for future comments */}
      </div>
    </div>


    <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Student 2:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {/* Row 1 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', paddingLeft: '80px', paddingRight: '50px', textAlign: 'center', width: '100px', height: '50px', color: 'orange'}}>Cooperation</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'orange' }}>Conceptual Contribution</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Practical Contribution</td>
            <td style={{ border: '1px solid black', paddingLeft: '55px', paddingRight: '55px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Work Ethic</td>
            <td style={{ border: '1px solid black', paddingLeft: '70px', paddingRight: '70px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Average</td>
          </tr>
          {/* Row 2 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black'}}>1</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color:'black'}}>4</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}>ETC..</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}></td>
          </tr>
          {/* Row 3 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'white' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
          {/* Row 4 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
          </tr>
          {/* Row 5 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Comments Recieved:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <div 
        style={{
          width: '900px', // Width of the box
          height: '100px', // Height of the box
          padding: '10px', // Padding inside the box
          fontSize: '16px', // Text font size
          border: '1px solid #808080', // Dark grey border
          borderRadius: '5px', // Rounded corners
          backgroundColor: '#ffffff', // Background color of the box
          display: 'flex', // Using flex to align content (if any in the future)
          alignItems: 'center', // Centering content vertically
          justifyContent: 'center', // Centering content horizontally
          color: '#808080' // Text color
        }}
      >
        {/* This div remains empty as a placeholder for future comments */}
      </div>
    </div>


    <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Student 3:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {/* Row 1 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', paddingLeft: '80px', paddingRight: '50px', textAlign: 'center', width: '100px', height: '50px', color: 'orange'}}>Cooperation</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'orange' }}>Conceptual Contribution</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Practical Contribution</td>
            <td style={{ border: '1px solid black', paddingLeft: '55px', paddingRight: '55px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Work Ethic</td>
            <td style={{ border: '1px solid black', paddingLeft: '70px', paddingRight: '70px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Average</td>
          </tr>
          {/* Row 2 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black'}}>1</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color:'black'}}>4</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}>ETC..</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}></td>
          </tr>
          {/* Row 3 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'white' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
          {/* Row 4 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
          </tr>
          {/* Row 5 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Comments Recieved:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <div 
        style={{
          width: '900px', // Width of the box
          height: '100px', // Height of the box
          padding: '10px', // Padding inside the box
          fontSize: '16px', // Text font size
          border: '1px solid #808080', // Dark grey border
          borderRadius: '5px', // Rounded corners
          backgroundColor: '#ffffff', // Background color of the box
          display: 'flex', // Using flex to align content (if any in the future)
          alignItems: 'center', // Centering content vertically
          justifyContent: 'center', // Centering content horizontally
          color: '#808080' // Text color
        }}
      >
        {/* This div remains empty as a placeholder for future comments */}
      </div>
    </div>


    <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Student 4:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {/* Row 1 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', paddingLeft: '80px', paddingRight: '50px', textAlign: 'center', width: '100px', height: '50px', color: 'orange'}}>Cooperation</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'orange' }}>Conceptual Contribution</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Practical Contribution</td>
            <td style={{ border: '1px solid black', paddingLeft: '55px', paddingRight: '55px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Work Ethic</td>
            <td style={{ border: '1px solid black', paddingLeft: '70px', paddingRight: '70px', textAlign: 'center', width: '100px', height: '50px' , color: 'orange'}}>Average</td>
          </tr>
          {/* Row 2 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black'}}>1</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color:'black'}}>4</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}>ETC..</td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' ,color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px',color: 'black' }}></td>
          </tr>
          {/* Row 3 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'white' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
          {/* Row 4 */}
          <tr style={{ backgroundColor: '#FFFFFF' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px', color: 'black' }}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'black'}}></td>
          </tr>
          {/* Row 5 */}
          <tr style={{ backgroundColor: '#464545' }}>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center', width: '100px', height: '50px' , color: 'white'}}></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="instructor header">
        <h3 style={{ marginTop: "50px", color: 'orange'}}> Comments Recieved:</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <div 
        style={{
          width: '900px', // Width of the box
          height: '100px', // Height of the box
          padding: '10px', // Padding inside the box
          fontSize: '16px', // Text font size
          border: '1px solid #808080', // Dark grey border
          borderRadius: '5px', // Rounded corners
          backgroundColor: '#ffffff', // Background color of the box
          display: 'flex', // Using flex to align content (if any in the future)
          alignItems: 'center', // Centering content vertically
          justifyContent: 'center', // Centering content horizontally
          color: '#808080' // Text color
        }}
      >
        {/* This div remains empty as a placeholder for future comments */}
      </div>
    </div>


    


    <div style={{
      position: 'fixed', // Keeps the button fixed at the bottom right
      right: '50px', // Space from the right edge of the screen
      bottom: '20px', // Space from the bottom edge of the screen
    }}>
      <button style={{
        padding: '10px 20px', // Padding around the text inside the button
        fontSize: '16px', // Font size of the button text
        borderRadius: '5px', // Rounded corners of the button
        backgroundColor: '#f0f0f0', // Background color of the button
        border: '1px solid #ccc', // Border color and size
        cursor: 'pointer', // Cursor changes to pointer when hovering over the button
      }} onClick={() => window.history.back()}>
        Back
      </button>
    </div>




      </tbody>
    </table>
    
    </main>
  );
}
