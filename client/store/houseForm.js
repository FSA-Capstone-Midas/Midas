import axios from "axios";
import history from "../history";
// import { fetchInformation, fetchItem } from "./plaid";

/**
 * ACTION TYPES
 */
const ADD_HOUSE_FORM = "ADD_HOUSE_FORM";

/**
 * INITIAL STATE
 */
const fieldValues = {
  annualIncome: "",
  mortgageRate: "",
  percentDownPayment: "",
  annualInsurance: "",
  annualPropertyTax: ""
};

/**
 * ACTION CREATORS
 */
export function addHouseForm(changeDetails) {
  const action = { type: ADD_HOUSE_FORM, changeDetails };
  return action;
}

/**
 * THUNK CREATORS
 */

export const addHouseFormdetails = changeDetails => dispatch => {
  dispatch(addHouseForm(changeDetails));
};

/**
 * REDUCER
 */
export default function(state = fieldValues, action) {
  switch (action.type) {
    case ADD_HOUSE_FORM:
      return Object.assign({}, state, action.changeDetails);
    default:
      return state;
  }
}
