export const toggleGoal = (goal) => {
  return {
    type: "GOAL_TOGGLED",
    payload: goal,
  };
};
