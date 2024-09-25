import React from "react"
import {fetchAPI,postAPI} from "../functions/Functions"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Login(){
    
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        postAPI("signup", payload)
        navigate("/about")
    }

    return(
        <>
            <form onSubmit = {submitForm}>
                <input type = "radio" name = "type" value = "student"/>
                <label>student</label>
                <input type = "radio" name = "type" value = "teacher"/>
                <label>teacher</label>

                <label htmlFor="email">Username</label>
                <input name = "email"/>

                <label htmlFor ="password"> Password</label>
                <input name = "password"/>
                <input type = "submit" value = "submit"></input>
            </form>
        </>
    )
}
 
export default Login