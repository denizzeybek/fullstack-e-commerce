import axios from "axios";
import cookies from 'js-cookie'
const bearerToken = cookies.get('bearerToken')

const instance = axios.create({
    baseURL: "http://localhost:8000/api", // TODO: read from ENV
    headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer "+ bearerToken,
        "XSRF-TOKEN":'meta[name="csrf-token"]',
        // 'X-CSRF-TOKEN': ('meta[name="csrf-token"]').attr('content'),
        "Accept": 'application/json'
    },
});

export default instance;
