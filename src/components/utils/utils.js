import axios from 'axios';
const newRequest = axios.create({
    baseURL:'https://cognitic-backend-8.onrender.com',
    withCredentials: true,
});
export default newRequest;
