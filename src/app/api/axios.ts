import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JETADMIN_BASE,
  headers: {
    Authorization: process.env.JETADMIN_API_KEY,
    'Content-Type': 'application/json',
  },
});

export default api;
