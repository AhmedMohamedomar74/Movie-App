

const INITIAL_STATE = {
    theme: "light"
}

export default function ThemeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                theme: action.payload
            }
        default:
            return state
    }

}