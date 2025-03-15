import axios from 'axios';
const newRequest = axios.create({
    baseURL: process.env.REACT_PUBLIC_API_URL || 'https://your-backend.onrender.com/api',
    withCredentials: true,
});
export default newRequest;