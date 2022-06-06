import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '752e22d0cdb2a16b9f8524715c55538e',
        language: 'pt-BR'
    }
});

export default api;