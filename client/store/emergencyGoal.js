import axios from "axios";
import history from "../history";

//initial state
const defaultEmergencyGoal = {};

//action type
const GET_EMERGENCY_GOAL = "GET_EMERGENCY_GOAL";
const POST_EMERGENCY_GOAL = "POST_EMERGENCT_GOAL";

//action creators
const addEmergencyGoal = emergencyGoal => ({
  type: GET_EMERGENCY_GOAL,
  emergencyGoal
});

export const fetchEmergencyGoal = id => dispatch => {
  axios
    .get(`/api/emergencyGoal/user/${id}`)
    .then(res => {
      dispatch(addEmergencyGoal(res.data));
    })
    .catch(err => console.log(err));
};

export const postEmergencyGoal = (id, emergencyInfo) => dispatch => {
  // body
  const { expense, duration } = emergencyInfo;
  axios
    .post(`/api/emergencyGoal/user/${id}`, { expense, duration })
    .then(res => res.data)
    .then(emergencyGoal => {
      //return added data to database
      dispatch(addEmergencyGoal(emergencyGoal));
    })
    .catch(err => console.log(err));
};
