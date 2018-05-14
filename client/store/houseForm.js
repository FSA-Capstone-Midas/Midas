import axios from "axios";

/**
 * ACTION TYPES
 */
const ADD_HOUSE_FORM = "ADD_HOUSE_FORM";
const GET_HOUSE_FORM = "GET_HOUSE_FORM";
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

/**
 * ACTION CREATORS
 */
export function getHouseForm(houseDetail) {
  const action = { type: GET_HOUSE_FORM, houseDetail };
  return action;
}
export function addHouseForm(changeDetails) {
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

export const getHouseFormdetails = userId => dispatch => {
  axios
    .get(`api/house/user/${userId}`)
    .then(res => {
      dispatch(getHouseForm(res.data));
    })
    .catch(err => console.log(err));
};

export const addHouseFormdetails = changeDetails => dispatch => {
  dispatch(addHouseForm(changeDetails));
};

export const addHousePlan = housePlan => dispatch => {
  const userId = housePlan.userId;

  axios
    .post(`api/house/user/${userId}`, housePlan)
    .then(res => {
      dispatch(getUpdatedHousePlan(res.data));
    })
    .catch(err => console.log(err));
};

/**
 * REDUCER
 */
export default function(state = fieldValues, action) {
  switch (action.type) {
    case GET_HOUSE_FORM:
      return Object.assign({}, state, action.houseDetail);
    case ADD_HOUSE_FORM:
      return Object.assign({}, state, action.changeDetails);
    case GET_UPDATED_HOUSE_PLAN:
      return Object.assign({}, state, action.housePlan);
    default:
      return state;
  }
}
