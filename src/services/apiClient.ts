import axios from "axios";

const BaseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const apiClient = (url: string) => {
  axios.create({
    params: {
      limit: 50,
    },
  });
  return axios.get(`${BaseUrl}/${url}/?api_key=${apiKey}`);
};

export default apiClient;
