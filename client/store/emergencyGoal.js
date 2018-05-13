import axios from "axios";
import history from "../history";

//initial state
const defaultEmergencyGoal = { isEnter: false };

//action type
const GET_EMERGENCY_GOAL = "GET_EMERGENCY_GOAL";

//action creators
export function getEmergencyGoal(emergencyGoal) {
  const action = { type: GET_EMERGENCY_GOAL, emergencyGoal };
  return action;
}

export const fetchEmergencyGoal = id => dispatch => {
  axios
    .get(`/api/emergencyGoal/user/${id}`)
    .then(res => {
      dispatch(getEmergencyGoal(res.data));
    })
    .catch(err => console.log(err));
};

export const postEmergencyGoal = (id, emergencyInfo) => dispatch => {
  const { expenseGoal, expenseDuration } = emergencyInfo;
  axios
    .post(`/api/emergencyGoal/user/${id}`, {
      expense: expenseGoal,
      duration: expenseDuration,
      isEnter: true,
    })
    .then(res => res.data)
    .then(emergencyGoal => {
      //return added data to database
      dispatch(getEmergencyGoal(emergencyGoal));
      history.push("/goals");
    })
    .catch(err => console.log(err));
};

//reducer
export default function emergencyGoalReducer(
  state = defaultEmergencyGoal,
  action
) {
  switch (action.type) {
    case GET_EMERGENCY_GOAL:
      return Object.assign({}, state, action.emergencyGoal);
    default:
      return state;
  }
}
