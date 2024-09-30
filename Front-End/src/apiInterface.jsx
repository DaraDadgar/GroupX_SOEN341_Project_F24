
//Axios is the library used to establish the connection between the frontend and backend by making requests to the server.
//*Note: Axios automatically parses the json formatted response to usable data, so you don't have to parse the response every time.
import axios from "axios";

//Creating an axios instance for reuse in different components
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

//Function to call GET routes
//pass the desired get route as argument (ex.: fetchAPI('/getAllStudents'))
export const fetchAPI = async (route) => {
  try {
    const response = await apiClient.get(route);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//Function to call POST routes
//pass the desired post route and the data to be stored as arguments (ex.: storeAPI('/signup', data))
export const storeAPI = async (route, data) => {
  try {
    const response = await apiClient.post(route, data);
    return response.data;
  } catch (error) {
    console.error("Error storing data:", error);
    throw error;
  }
};
