import { combineReducers } from "redux";

const goalsReducer = () => {
  return [];
};

const toggledGoalReducer = (toggledGoal = null, action) => {
  if (action.type === "GOAL_TOGGLED") {
    return action.payload;
  }

  return toggledGoal;
};

export default combineReducers({
  goals: goalsReducer,
  toggledGoal: toggledGoalReducer,
});
