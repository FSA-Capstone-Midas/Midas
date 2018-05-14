import axios from "axios";

/**
 * ACTION TYPES
 */
const GET_BUDGET = "GET_BUDGET";
const UPDATE_BUDGET = "UPDATE_BUDGET";

/**
 * INITIAL STATE
 */
const defaultBudget = {};

/**
 * ACTION CREATORS
 */
export const getBudget = budgetData => ({
  type: GET_BUDGET,
  budgetData
});

export const updateBudget = budgetData => ({
  type: UPDATE_BUDGET,
  budgetData
});

/**
 * THUNK CREATORS
 */
export const getBudgetFromDatabase = userId => dispatch =>
  axios
    .get(`api/budget/user/${userId}`)
    .then(res => {
      dispatch(getBudget(res.data));
    })
    .catch(err => console.log(err));

export const updateUserBudget = (budgetObj, userId) => dispatch => {
  axios
    .post(`/api/budget/user/${userId}`, budgetObj)
    .then(res => {
      dispatch(updateBudget(res.data));
    })
    .catch(err => console.log(err));
};
/**
 * REDUCER
 */
export default function(state = defaultBudget, action) {
  switch (action.type) {
    case GET_BUDGET:
      return Object.assign({}, state, action.budgetData);
    case UPDATE_BUDGET:
      return Object.assign({}, state, action.budgetData);
    default:
      return state;
  }
}
