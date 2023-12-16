import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

/**
 * Criação de uma instância do Axios para realizar requisições à API.
 */
export const Api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Interceptador de requisições para adicionar o token de autenticação ao cabeçalho.
 */
/* Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();
        if (user?.token)
            config.headers.Authorization = `Token ${user?.token}`;
            return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
); */
