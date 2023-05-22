import axios, { AxiosError } from 'axios';
import { getUserLocalStorage } from '../contexts/AuthProvider/utils';

export const Api = axios.create({
  baseURL: "https://smart-api-v2.dockersky.com/api/v1/",
});

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Tratar o AxiosError adequadamente
    if (error.response) {
      // A resposta foi recebida com um status de erro (fora do intervalo 2xx)
      console.log('Error status:', error.response.status);
      console.log('Error data:', error.response.data);
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta recebida
      console.log('No response received:', error.request);
    } else {
      // Ocorreu um erro ao configurar a requisição
      console.log('Error setting up the request:', error.message);
    }
    return Promise.reject(error);
  }
);
