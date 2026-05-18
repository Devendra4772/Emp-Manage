import axios from "axios";

const api = axios.create({
  baseURL: "https://emp-manage-0w89.onrender.com"
});

export default api;