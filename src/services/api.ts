import axios from "axios";

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
 * Interceptador de respostas.
 */
Api.interceptors.response.use(
    response => response,
    async error => {
        // Verifica se o erro é 401 e toma uma ação
        if (error.response && error.response.status === 401) {
            console.log("Não autorizado! Redirecionando para o login...");
        }
        return Promise.reject(error);
    }
);


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
