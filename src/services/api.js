import axios from 'axios';

const api = axios.create({
  baseURL: 'https://10.100.84.241:4004',
});

export default api;
