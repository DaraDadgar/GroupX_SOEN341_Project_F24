import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import App from './MainSignup.jsx'
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <NavBar />
    <App />
  </StrictMode>,
)
