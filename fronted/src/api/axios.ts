import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5002/api/user'
});

export default api;