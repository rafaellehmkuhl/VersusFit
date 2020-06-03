import { combineReducers } from "redux";
import authReducer from "./authReducer";

const goalsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_GOALS":
      return { ...state, [action.user_id]: action.payload };

    case "DELETE_GOAL":
      console.log("deletando");
      return { ...action.payload };

    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
});
