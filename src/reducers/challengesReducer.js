import {
  FETCH_USER_CHALLENGES,
  ADD_CHALLENGE,
  ADD_CHALLENGE_USER,
} from "../actions/types";
import _ from "lodash";

const challengesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_CHALLENGES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ADD_CHALLENGE:
      return { ...state, [action.payload.id]: action.payload };
    case ADD_CHALLENGE_USER:
      return { ...state };
    // return { ...state, [action.payload.id]: action.payload };
    // case UPDATE_USER_GOAL:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_USER_GOAL:
    //   return _.omit(state, action.payload.id);

    default:
      return state;
  }
};

export default challengesReducer;
