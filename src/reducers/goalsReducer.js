import {
  FETCH_USER_GOALS,
  ADD_USER_GOAL,
  UPDATE_USER_GOAL,
  DELETE_USER_GOAL,
} from "../actions/types";
import _ from "lodash";

const goalsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_GOALS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ADD_USER_GOAL:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_USER_GOAL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_USER_GOAL:
      return _.omit(state, action.payload.id);

    default:
      return state;
  }
};

export default goalsReducer;
