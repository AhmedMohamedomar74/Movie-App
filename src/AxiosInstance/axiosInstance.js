import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3/movie/popular"
})


axiosInstance.interceptors.request.use(function (config)
{
    config.params = 
    {
        "apiKey": "b565283dc7e83e50ea181e7329c96854",
    }


    console.log(config)
    return config;
},
function(error)
{
    console.log(error)
    return Promise.reject(error);
})