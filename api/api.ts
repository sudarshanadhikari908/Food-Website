import axios from "axios";

// Base Url to perform every request
const api = axios.create({
  baseURL: "https://uat.ordering-boafresh.ekbana.net/",
});
export default api;
