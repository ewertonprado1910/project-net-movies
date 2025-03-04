import axios from "axios"


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "d5c3d5859f151f4c757fb5af7153a6de",
        language: "pt-BR",
        page: 1
    }
})

export default api