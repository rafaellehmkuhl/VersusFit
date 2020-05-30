import { SIGN_IN, SIGN_OUT } from "./types";
import goalsAPI from "../apis/goalsAPI";

export const fetchChallengerGoals = (user_id) => async (dispatch) => {
  const response = await goalsAPI.get(`/user_goals/${user_id}`);
  dispatch({
    type: "FETCH_GOALS",
    user_id: user_id,
    payload: response.data,
  });
};

export const addChallengerGoal = (goal, user_name) => async (dispatch) => {
  await goalsAPI.post(`/user_goals/${user_name}`, goal);
  dispatch(fetchChallengerGoals(user_name));
};

export const deleteChallengerGoal = (goal_id, user_id) => async (dispatch) => {
  await goalsAPI.delete(`/goal/${goal_id}`);
  dispatch(fetchChallengerGoals(user_id));
};

export const toggleChallengerGoal = (user_id, goal_id, weekday_name) => async (
  dispatch,
  getState
) => {
  const toggled_goal = { weekday: weekday_name };
  await goalsAPI.patch(`/goal/${goal_id}`, toggled_goal);
  dispatch(fetchChallengerGoals(user_id));
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
