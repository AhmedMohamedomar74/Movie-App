import { axiosInstance } from "../../AxiosInstance/axiosInstance.js"

export default function getMovise(activePage) {
    return function (dispatch) {
        return axiosInstance.get()
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