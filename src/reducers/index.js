import { combineReducers } from "redux";
import authReducer from "./authReducer";
import goalsReducer from "./goalsReducer";

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
});
