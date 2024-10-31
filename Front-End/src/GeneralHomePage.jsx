import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import './css/GeneralHomePage.css'

function GeneralHomePage(){
    return(
        <>
            <Header/>
            <NavBar/>

            <h1 className="welcome">Welcome to our Peer Assessment Tool!</h1>

            <div className="description">
            <img className="student-image" src="Picture/StudentGroupPicture.jpeg" alt="Student" />
                <div className='text-image'>
                    <h2>What we do</h2>
                    <p>Our platform is designed to enhance collaborative learning by enabling students to
                        anonymously evaluate their peers' contributions.  Instructors benefit from robust management tools that allow them to efficiently oversee
                team dynamics and monitor individual and group performance. With our platform, educators
                can easily identify strengths and areas for improvement, facilitating targeted support
                and enhancing the overall learning experience.
                    </p>
                </div>
            </div>
        </>
    );
}

export default GeneralHomePage
