import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.95.254:4004/',
});

export default api;
