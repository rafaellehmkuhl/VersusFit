import { SIGN_IN, SIGN_OUT } from "./types";
import goalsAPI from "../apis/goalsAPI";

export const fetchChallengerGoals = (challengerName) => async (dispatch) => {
  const response = await goalsAPI.get(`/user_goals/${challengerName}`);
  dispatch({
    type: "FETCH_GOALS",
    challengerName: challengerName,
    payload: response.data,
  });
};

export const addChallengerGoal = (goal, user_name) => async (dispatch) => {
  await goalsAPI.post(`/user_goals/${user_name}`, goal);
  dispatch(fetchChallengerGoals(user_name));
};

export const deleteChallengerGoal = (goal_id, challengerName) => async (
  dispatch
) => {
  await goalsAPI.delete(`/goal/${goal_id}`);
  dispatch(fetchChallengerGoals(challengerName));
};

export const toggleChallengerGoal = (
  challengerName,
  goal_id,
  weekday_name
) => async (dispatch, getState) => {
  const toggled_goal = { weekday: weekday_name };
  await goalsAPI.patch(`/goal/${goal_id}`, toggled_goal);
  dispatch(fetchChallengerGoals(challengerName));
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
