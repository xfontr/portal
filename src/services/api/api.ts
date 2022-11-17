import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const api = {
  get: <T>(
    url: string,
    config: AxiosRequestConfig<{}> = {}
  ): Promise<AxiosResponse<T>> => axios.get<T>(url, config),

  post: <T>(
    url: string,
    body: object,
    config: AxiosRequestConfig<{}> = {}
  ): Promise<AxiosResponse<T>> => axios.post<T>(url, body, config),
};

export default api;
