import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import './css/GeneralHomePage.css'

function GeneralHomePage(){
    return(
        <>
            <Header/>
            <NavBar/>

            <h1 className="welcome">Welcome to our Peer Assessment Tool!</h1><div className="text-image">
                <div className="description">
                    This platform enables students to anonymously
                    <br />
                    evaluate peer contributions, while instructors
                    can
                    <br />
                    manage teams and monitor performance efficiently.
                </div>
                <img className="student-image" src="Picture/StudentGroupPicture.jpeg" alt="Student" />
            </div>
        </>
    );
}

export default GeneralHomePage
