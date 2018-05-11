import axios from "axios";
import history from "../history";
// import { fetchInformation, fetchItem } from "./plaid";

/**
 * ACTION TYPES
 */
const ADD_FORM = "ADD_FORM";

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
export function addFrom(changeDetails) {
  const action = { type: ADD_FORM, changeDetails };
  return action;
}

/**
 * THUNK CREATORS
 */

export const addFormdetails = changeDetails => dispatch => {
  dispatch(addFrom(changeDetails));
};

/**
 * REDUCER
 */
export default function(state = fieldValues, action) {
  switch (action.type) {
    case ADD_FORM:
      return Object.assign({}, state, action.changeDetails);
    default:
      return state;
  }
}
