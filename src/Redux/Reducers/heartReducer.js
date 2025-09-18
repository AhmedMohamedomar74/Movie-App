const initState = {
    movies : []
}

export default function heartReducer(state = initState , action)
{
    switch (action.type) {
        case "CHANGE_WATCHLIST":

            let index = state.movies.findIndex((movie)=>{
                return movie.id === action.payload.id
            })
            if (index === -1) {
                // state.movies.push(action.payload)
                return{
                    ...state,
                    movies:[...state.movies , action.payload]
                }
            }
            else
            {
                state.movies.splice(index,1)
                return{
                    ...state,
                    movies:[...state.movies]
                }
            }    
        default:
            return state
    }
}