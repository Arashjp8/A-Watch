import axios from "axios";

const apiClient = (url: string) => {
  axios.create({
    params: {
      limit: 50,
    },
  });
  return axios.get(`${url}`);
};

export default apiClient;
