import axios from "axios";
import history from "../history";
// import { fetchInformation, fetchItem } from "./plaid";

/**
 * ACTION TYPES
 */
const ADD_FORM = "ADD_FORM";
const GET_FORM = "GET_FORM";

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
export function addFrom(changeDetails) {
  const action = { type: ADD_FORM, changeDetails };
  return action;
}

export function getFrom(retirementDeatils) {
  const action = { type: GET_FORM, retirementDeatils };
  return action;
}

/**
 * THUNK CREATORS
 */

export const addFormdetails = changeDetails => dispatch => {
  dispatch(addFrom(changeDetails));
};

export const fetchCurrentRetirementDetails = id => dispatch => {
  axios
    .get(`/api/retirement/user/${id}`)
    .then(res => {
      dispatch(getFrom(res.data));
    })
    .catch(err => console.log(err));
};

/**
 * REDUCER
 */
export default function(state = fieldValues, action) {
  switch (action.type) {
    case ADD_FORM:
      return Object.assign({}, state, action.changeDetails);
    case GET_FORM:
      return Object.assign({}, state, action.retirementDeatils);
    default:
      return state;
  }
}
