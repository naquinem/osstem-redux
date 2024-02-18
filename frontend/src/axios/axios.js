import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        } 
        return config;
    },
    (error) => {
        if(error) {
            return Promise.reject(error);
        }
    }
);

export default axiosClient;