import axios from "axios";
import history from "../history";
// import { fetchInformation, fetchItem } from "./plaid";

/**
 * ACTION TYPES
 */
const ADD_HOUSE_FORM = "ADD_HOUSE_FORM";
const GET_UPDATED_HOUSE_PLAN = "GET_HOUSE_PLAN";

/**
 * INITIAL STATE
 */
const fieldValues = {
  annualIncome: "",
  mortgageRate: "",
  percentDownPayment: "",
  annualInsurance: "",
  annualPropertyTax: "",
};
//const initialState = { fieldValues };

/**
 * ACTION CREATORS
 */
export function addHouseForm(changeDetails) {
  console.log("what is addHouseForm changeDetails", changeDetails);
  const action = { type: ADD_HOUSE_FORM, changeDetails };
  return action;
}
export function getUpdatedHousePlan(housePlan) {
  const action = { type: GET_UPDATED_HOUSE_PLAN, housePlan };
  return action;
}
/**
 * THUNK CREATORS
 */

export const addHouseFormdetails = changeDetails => dispatch => {
  console.log("what is addHouseFormdetails changeDetails", changeDetails);
  dispatch(addHouseForm(changeDetails));
};

export const addHousePlan = housePlan => dispatch => {
  const userId = housePlan.userId;
  console.log("housePlan", housePlan);

  axios
    .post(`api/house/user/${userId}`, housePlan)
    .then(res => {
      console.log("res.data", res.data);
      dispatch(getUpdatedHousePlan(res.data));
    })
    .catch(err => console.log(err));
};

/**
 * REDUCER
 */
export default function(state = fieldValues, action) {
  switch (action.type) {
    case ADD_HOUSE_FORM:
      return Object.assign({}, state, action.changeDetails);
    case GET_UPDATED_HOUSE_PLAN:
      return Object.assign({}, state, action.housePlan);
    default:
      return state;
  }
}
