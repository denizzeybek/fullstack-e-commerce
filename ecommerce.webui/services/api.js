import axios from "axios";
import cookies from 'js-cookie'
const accessToken = cookies.get('accessToken')

const instance = axios.create({
    baseURL: "http://localhost:8000/api", // TODO: read from ENV
    headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer "+ accessToken,
        "XSRF-TOKEN":'meta[name="csrf-token"]',
        "Accept": 'application/json'
    },
});

export default instance;
