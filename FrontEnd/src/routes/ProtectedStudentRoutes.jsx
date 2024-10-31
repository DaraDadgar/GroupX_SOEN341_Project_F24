import {Outlet, Navigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { fetchAPI } from "../functions/apiinterface"
const ProtectedStudentsRoutes = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchUser = async () => {
            fetchAPI("session").then((data) => {
                setUser(data.data.Type);
                console.log(data)
            })
        }
        fetchUser()
    },[])

    if(user == "none" || user == "teacher") {
        return <Navigate to="/"/>
    }
    else{
        return <Outlet/>
    }
}

export default ProtectedStudentsRoutes