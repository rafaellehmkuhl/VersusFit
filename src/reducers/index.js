import { combineReducers } from "redux";
import authReducer from "./authReducer";

const goalsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_GOALS":
      const challengerName = action.challengerName;
      const newState = Object.assign({}, state);
      delete newState[challengerName];
      return Object.assign(newState, { [challengerName]: action.payload });

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
