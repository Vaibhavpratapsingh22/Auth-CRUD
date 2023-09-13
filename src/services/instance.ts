import axios from "axios";


const appServiceInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

appServiceInstance.interceptors.request.use(
  (req) => {
    
    if (true) {
        req.headers['app-id'] = `65019937508c98320aa06529`;
    }
    return req;
  },
  (error) => {
    localStorage.clear();
    Promise.reject(error).then(() => {
      localStorage.clear();
    });
  }
);

export default appServiceInstance;
