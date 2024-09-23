import { useState, useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [name, setName] = useState();

  const fetchName = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/hello")
      setName(response.data);
      console.log(response)
    }
    catch(error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchName()
  },[])

  return (
    <p>
      {name}
    </p>
  )
}

export default App
