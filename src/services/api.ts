import axios from 'axios';
import { getUserLocalStorage } from '../contexts/AuthProvider/utils';

export const Api = axios.create({
    baseURL: "https://smart-api-v2.dockersky.com/api/v1/",
});

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage(); // Adicionando parênteses para invocar a função
        if(user) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => { // Adicionando uma vírgula para separar as funções de sucesso e falha
        return Promise.reject(error);
    }
);
