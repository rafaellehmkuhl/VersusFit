import { FETCH_USERS } from "../actions/types";
import _ from "lodash";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};

export default usersReducer;
