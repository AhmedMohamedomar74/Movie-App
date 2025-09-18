import axios from "axios"

export default function getMovise(activePage) {
    return function (dispatch) {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b565283dc7e83e50ea181e7329c96854&page=${activePage}`)
            .then((res) => 
                dispatch({
                   type : "GET_MOVIES",
                   payload: res.data.results
                })
    )
            .catch ((err) => {
        console.log(err)
    })
}
}