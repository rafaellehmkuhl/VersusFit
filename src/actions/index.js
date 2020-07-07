import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_USER_GOALS,
  FETCH_USER_CHALLENGES,
  ADD_USER_GOAL,
  UPDATE_USER_GOAL,
  DELETE_USER_GOAL,
} from "./types";
import goalsAPI from "../apis/goalsAPI";

export const fetchChallengerGoals = (user_id) => async (dispatch) => {
  const response = await goalsAPI.get(`/user_goals/${user_id}`);
  dispatch({
    type: FETCH_USER_GOALS,
    payload: response.data,
  });
};

export const fetchUserChallenges = (user_id) => async (dispatch) => {
  const response = await goalsAPI.get(`/user_challenges/${user_id}`);
  dispatch({
    type: FETCH_USER_CHALLENGES,
    payload: response.data,
  });
};

export const addChallengerGoal = (goal, user_id) => async (dispatch) => {
  const response = await goalsAPI.post(`/user_goals/${user_id}`, goal);
  dispatch({
    type: ADD_USER_GOAL,
    payload: response.data,
  });
};

export const deleteChallengerGoal = (goal_id) => async (dispatch) => {
  await goalsAPI.delete(`/goal/${goal_id}`);
  dispatch({
    type: DELETE_USER_GOAL,
    payload: {
      id: goal_id,
    },
  });
};

export const toggleChallengerGoal = (goal_id, weekday) => async (dispatch) => {
  const response = await goalsAPI.patch(`/goal/${goal_id}`, { weekday });
  dispatch({
    type: UPDATE_USER_GOAL,
    payload: response.data,
  });
};

export const signIn = (user_g_id, user_name) => async (dispatch) => {
  const user = {
    g_id: user_g_id,
    name: user_name,
  };
  const response = await goalsAPI.post(`/users`, user);
  dispatch({
    type: SIGN_IN,
    payload: response.data,
  });
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
