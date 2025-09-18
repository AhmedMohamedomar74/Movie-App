import { applyMiddleware, createStore } from "redux";
import compineReducres from "./compineReducres.js";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

export const myStore = createStore(compineReducres,composeWithDevTools(applyMiddleware(thunk)))