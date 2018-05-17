import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const ADD_HOUSE_FORM = "ADD_HOUSE_FORM";
const GET_HOUSE_FORM = "GET_HOUSE_FORM";
const GET_UPDATED_HOUSE_PLAN = "GET_HOUSE_PLAN";
const DELETE_HOUSE_GOAL = "DELETE_HOUSE_GOAL";

/**
 * INITIAL STATE
 */
const fieldValues = {
  annualIncome: 0,
  mortgageRate: 0,
  percentDownPayment: 0,
  annualInsurance: 0,
  annualPropertyTax: 0
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

export function deleteHouseGoal(houseGoal) {
  const action = { type: DELETE_HOUSE_GOAL, houseGoal };
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
  console.log("what is housePlan", housePlan);
  console.log("what is userId", userId);
  axios
    .post(`api/house/user/${userId}`, housePlan)
    .then(res => {
      console.log("spoijef", res.data);
      console.log("what is res.data", res.data);
      dispatch(getUpdatedHousePlan(res.data));
      history.push("/goals");
    })
    .catch(err => console.log(err));
};

export const deleteHousePlan = id => dispatch => {
  axios
    .delete(`/api/house/user/${id}`)
    .then(res => {
      dispatch(deleteHouseGoal());
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
    case DELETE_HOUSE_GOAL:
      return fieldValues;

    default:
      return state;
  }
}
