import Header from '../components/Header.jsx'
import NavBar from '../components/NavBar.jsx'
import '../css/GeneralHomePage.css'
import studentImage from "./StudentGroupPicture.jpeg"
function GeneralHomePage(){
    return(
        <>
            <Header/>
            <NavBar/>
            <h1 className="welcome">Welcome to our Peer Assessment Tool!</h1>

            <div className="description">
            <img className="student-image" src={studentImage} alt="Student" />
                <div className='text-image'>
                    <h2>What we do</h2>
                    <p>
                        Our platform is designed to enhance collaborative learning by enabling students to<br />
                        anonymously evaluate their peers' contributions.  <br />
                        Instructors benefit from robust management tools<br />
                        that allow them to efficiently oversee team dynamics and monitor individual and group performance.<br />
                        With our platform, educators can easily identify strengths and areas for improvement, facilitating targeted support<br />
<br />                  and enhancing the overall learning experience.<br />
                    </p>
                </div>
            </div>
        </>
    );
}

export default GeneralHomePage