import MainSignup from './MainSignup.jsx'
import GeneralHomePage from './GeneralHomePage.jsx'
import TeamCreation from './TeamCreation.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App(){
    return(
        <Router>
            <Routes>
                <Route path ="/MainSignup" element = {<MainSignup/>}/>
                <Route path ="/GeneralHomePage" element = {<GeneralHomePage/>}/>
                <Route path ="/TeamCreation" element = {<TeamCreation/>}/>
            </Routes>
        </Router>
    );
}

export default App