//Axios is the library used to establish the connection between the frontend and backend by making requests to the server.
//*Note: Axios automatically parses the json formatted response to usable data, so you don't have to parse the response every time.
import axios from "axios";

//Creating an axios instance for reuse in different components
const apiClient = axios.create({
  baseURL: "http://localhost:5001",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const deleteTeam = async (route, token) => {
  const apiClientX = axios.create({
    baseURL: "http://localhost:5001",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  try {
    const response = await apiClientX.delete(`/teams/${teamId}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error deleting team:", error);
    return error;
  }
};

export const fetchProtectedAPI = async (route, token) => {
  const apiClientX = axios.create({
    baseURL: "http://localhost:5001",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    const response = await apiClientX.get(route, { withCredentials: true });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

//Function to call GET routes
//pass the desired get route as argument (ex.: fetchAPI('/getAllStudents'))
export const fetchAPI = async (route) => {
  try {
    const response = await apiClient.get(route, { withCredentials: true });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

export const storeProtectedAPI = async (route, data, token) => {
  const apiClientX = axios.create({
    baseURL: "http://localhost:5001",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    const response = await apiClientX.post(route, data, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error storing data:", error);
    return error;
  }
};

//Function to call POST routes
//pass the desired post route and the data to be stored as arguments (ex.: storeAPI('/signup', data))
export const storeAPI = async (route, data) => {
  try {
    const response = await apiClient.post(route, data, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Error storing data:", error);
    return error;
  }
};

// export const fetchAPI_withCredentials = async(route) => {
//   try {
//     const response = await apiClient.get(route, {withCredentials: true});
//     return response;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return error;
//   }
// };

// export const storeAPI_withCredentials = async(route, formData) => {
//   try {
//     const response = await apiClient.post(route, data, {withCredentials: true});
//     return response;
//   } catch (error) {
//     console.error("Error storing data:", error);
//     return error;
//   }
// };
