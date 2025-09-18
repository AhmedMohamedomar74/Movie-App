const INITIAL_STATE = {
    list: []
}

export default function MoviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_MOVIES":
            return ({
                list : action.payload
            })

        default:
            return state
    }
}