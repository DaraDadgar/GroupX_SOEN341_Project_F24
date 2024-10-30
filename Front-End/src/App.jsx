import MainSignup from './MainSignup.jsx'
import GeneralHomePage from './GeneralHomePage.jsx'
import TeamCreation from './TeamCreation.jsx';
import MainStudent from './MainStudent.jsx';
import MainLogin from './MainLogin.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App(){
    return(
        <Router>
            <Routes>
                <Route path ="/MainSignup" element = {<MainSignup/>}/>
                <Route path ="/GeneralHomePage" element = {<GeneralHomePage/>}/>
                <Route path ="/TeamCreation" element = {<TeamCreation/>}/>
                <Route path ="/MainStudent" element = {<MainStudent/>}/>
                <Route path ="/MainLogin" element = {<MainLogin/>}/>
            </Routes>
        </Router>
    );
}

export default App