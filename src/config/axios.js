import axios from "axios";
import { getToken, logOut } from "../Utils/authUtils";

const customAxios = axios.create({
  baseURL: "http://localhost:3000/",
});

customAxios.defaults.headers.common["Authorization"] = getToken();

// Add a response interceptor
customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let { status } = error.response;
    if (status === 401) {
      logOut();
      alert("sesión terminada");
      document.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default customAxios;
