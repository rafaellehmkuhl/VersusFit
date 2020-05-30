import { combineReducers } from "redux";
import authReducer from "./authReducer";

const goalsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_GOALS":
      const user_id = action.user_id;
      const newState = Object.assign({}, state);
      delete newState[user_id];
      return Object.assign(newState, { [user_id]: action.payload });

    case "DELETE_GOAL":
      console.log("deletando");
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
});
