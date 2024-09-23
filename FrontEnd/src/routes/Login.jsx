import React from "react"
import { useState, useEffect } from "react"
import axios from 'axios'

function Login(){
    
    const authenticateLogin = (e) => {
        
    }

    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
    }

    return(
        <>
            <form onSubmit = {submitForm}>
                <label for ="username">Username</label>
                <input name = "username"/>

                <label for ="password"> Password</label>
                <input name = "password"/>
                <input type = "submit" value = "submit"></input>
            </form>
        </>
    )
}
 
export default Login