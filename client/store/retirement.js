import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const GET_RETIREMENT_PLAN = "GET_RETIREMENT_PLAN";
const ADD_RETIREMENT_PLAN = "ADD_RETIREMENT_PLAN";
const DELETE_RETIREMENT_PLAN = "DELETE_RETIREMENT_PLAN";

/**
 * INITIAL STATE
 */
const fieldValues = {
  birthyear: "",
  earnEachYear: "",
  martialStatus: "",
  monthlyRetirementSpending: "",
  retirementage: "",
  saveEachYear: "",
  savedSoFar: "",
};

/**
 * ACTION CREATORS
 */

export function getRetirementPlan(retirementDeatils) {
  const action = { type: GET_RETIREMENT_PLAN, retirementDeatils };
  return action;
}

export function addRetirementPlan(retirementDeatils) {
  const action = { type: ADD_RETIREMENT_PLAN, retirementDeatils };
  return action;
}

export function deleteRetirementGoal(retirementDeatils) {
  const action = { type: DELETE_RETIREMENT_PLAN, retirementDeatils };
  return action;
}
/**
 * THUNK CREATORS
 */

export const addRetirementDetails = (id, formDetails) => dispatch => {
  axios
    .post(`/api/retirement/user/${id}`, formDetails)
    .then(res => {
      dispatch(addRetirementPlan(res.data));
      history.push("/retirement/analysis");
    })
    .catch(err => console.log(err));
};

export const fetchRetirementDetails = id => dispatch => {
  axios
    .get(`/api/retirement/user/${id}`)
    .then(res => {
      dispatch(getRetirementPlan(res.data));
    })
    .catch(err => console.log(err));
};

export const deleteRetirementPlan = id => dispatch => {
  axios
    .delete(`/api/retirement/user/${id}`)
    .then(res => {
      dispatch(deleteRetirementGoal(res.data));
    })
    .catch(err => console.log(err));
};

/**
 * REDUCER
 */
export default function(state = fieldValues, action) {
  switch (action.type) {
    case GET_RETIREMENT_PLAN:
      return Object.assign({}, state, action.retirementDeatils);
    case ADD_RETIREMENT_PLAN:
      return Object.assign({}, state, action.retirementDeatils);
    case DELETE_RETIREMENT_PLAN:
      return {};
    default:
      return state;
  }
}
