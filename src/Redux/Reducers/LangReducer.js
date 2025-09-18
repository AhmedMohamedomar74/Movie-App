
const INITIAL_STATE = {
    lang: "EN"
}
export default function LangReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return {
                ...state,
                lang: action.payload // new value 
            }
        default:
            return state

    }
}