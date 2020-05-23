import { SIGN_IN, SIGN_OUT } from "./types";
import goalsAPI from "../apis/goalsAPI";

export const fetchChallengerGoals = (challengerName) => async (dispatch) => {
  const response = await goalsAPI.get(`/${challengerName}`);
  var challengerData = {};
  challengerData[challengerName] = response.data;
  dispatch({
    type: "FETCH_GOALS",
    challengerName: challengerName,
    payload: challengerData,
  });
};

export const addChallengerGoal = (goal_tarefa, challengerName) => async (
  dispatch
) => {
  var goal = {
    tarefa: goal_tarefa,
    competidor: challengerName,
  };
  await goalsAPI.post(`/`, goal);
  dispatch(fetchChallengerGoals(challengerName));
};

export const deleteChallengerGoal = (goal_id, challengerName) => async (
  dispatch
) => {
  await goalsAPI.delete(`/${goal_id}`);
  dispatch(fetchChallengerGoals(challengerName));
};

export const toggleChallengerGoal = (goal_id, challengerName) => async (
  dispatch,
  getState
) => {
  const previousStatus = getState().goals[challengerName].filter(
    (element) => element.id === goal_id
  )[0].status;
  const newGoalState = { status: !previousStatus };
  await goalsAPI.patch(`/${goal_id}`, newGoalState);
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
