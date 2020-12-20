// import axios from "axios";
// const instance = axios.create({
//   baseURL: "http://localhost:3001/api/",
//   withCredentials: false,
//   headers: {
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     Authorization: `Bearer ${localStorage.getItem('token')}`,
// }
// });
// export default instance;
import axios from 'axios';

const fetchClient = () => {
  const defaultOptions = {
    baseURL: "http://localhost:3001/api/",
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

  return instance;
};

export default fetchClient();