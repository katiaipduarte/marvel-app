import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
