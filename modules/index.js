import { combineReducers } from "redux";
import todos from "./todos";
import auth from "./auth";

export const rootReducer = combineReducers({
  todos,
  auth,
});
