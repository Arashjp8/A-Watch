import axios from "axios";

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages?: number;
  total_results?: number;
}

const apiClient = (url: string) => {
  axios.create({
    params: {
      limit: 50,
    },
  });
  return axios.get(`${url}`);
};

export default apiClient;
