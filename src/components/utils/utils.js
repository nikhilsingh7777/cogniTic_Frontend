import axios from 'axios';
const newRequest = axios.create({
    baseURL: process.env.REACT_PUBLIC_API_URL || 'https://cognitic-backend-8.onrender.com',
    withCredentials: true,
});
export default newRequest;
