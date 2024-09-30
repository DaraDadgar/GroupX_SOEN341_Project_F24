import MainSignup from './MainSignup.jsx'
import GeneralHomePage from './GeneralHomePage.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App(){
    return(
        <Router>
            <Routes>
                <Route path ="/MainSignup" element = {<MainSignup/>}/>
                <Route path ="/GeneralHomePage" element = {<GeneralHomePage/>}/>
            </Routes>
        </Router>
    );
}

export default App