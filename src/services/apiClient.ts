import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages?: number;
  total_results?: number;
}

const apiClient = (url: string, config?: AxiosRequestConfig) => {
  axios.create({
    params: {
      limit: 50,
    },
  });
  return axios.get(`${url}`, config);
};

export default apiClient;
