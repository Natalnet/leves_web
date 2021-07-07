import axios from 'axios';

const api = axios.create({
  baseURL: 'https://levesapp.herokuapp.com/',
});

export default api;
