import { FETCH_USER_GOALS } from "../actions/types";

const goalsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_GOALS:
      return { ...state, [action.user_id]: action.payload };

    default:
      return state;
  }
};

export default goalsReducer;
