import { combineReducers } from "redux";
import authReducer from "./authReducer";
import goalsReducer from "./goalsReducer";
import challengesReducer from "./challengesReducer";

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
  challenges: challengesReducer,
});
