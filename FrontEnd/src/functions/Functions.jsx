import { useState, useEffect } from "react";
import axios from 'axios';

async function fetchAPI(route) {
  try{
    const response = await axios.get("http://127.0.0.1:8000/" + route)
    return response
  }
  catch(e){
    console.log(e)
    return null
  }
}
async function postAPI(route, formData){
    const response = await axios.post('http://127.0.0.1:5000/' + route, formData)
    return response
}

export  {fetchAPI, postAPI};