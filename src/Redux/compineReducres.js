import { combineReducers } from "redux";
import heartReducer from "./Reducers/heartReducer.js";
import LangReducer from "./Reducers/LangReducer.js";
import ThemeReducer from "./Reducers/ThemeReducer.js";
import MoviesReducer from "./Reducers/moviesReducer.js";

export default combineReducers(
    {
        heartReducer, LangReducer, ThemeReducer,MoviesReducer
    }
)