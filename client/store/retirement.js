import axios from "axios";
import history from "../history";
// import { fetchInformation, fetchItem } from "./plaid";

/**
 * ACTION TYPES
 */
// const ADD_FORM = "ADD_FORM";
const GET_RETIREMENT_PLAN = "GET_RETIREMENT_PLAN";

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
  savedSoFar: ""
};

/**
 * ACTION CREATORS
 */
// export function addFrom(changeDetails) {
//   const action = { type: ADD_FORM, changeDetails };
//   return action;
// }

export function getRetirementPlan(retirementDeatils) {
  const action = { type: GET_RETIREMENT_PLAN, retirementDeatils };
  return action;
}

/**
 * THUNK CREATORS
 */

// export const addFormdetails = changeDetails => dispatch => {
//   dispatch(addFrom(changeDetails));
// };

export const fetchRetirementDetails = id => dispatch => {
  axios
    .get(`/api/retirement/user/${id}`)
    .then(res => {
      dispatch(getRetirementPlan(res.data));
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
    default:
      return state;
  }
}
