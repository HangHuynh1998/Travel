import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3001/api/",
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
}
});
export default instance;
