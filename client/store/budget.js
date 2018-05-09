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
export const getBudgetFromDatabase = () => dispatch =>
  axios
    .get("/user/:userId/budget")
    .then(res => {
      dispatch(getBudget(res.data));
    })
    .catch(err => console.log(err));

export const updateUserBudget = budgetObj => dispatch =>
  axios
    .put("/api/user/:userId/budget", budgetObj)
    .then(res => {
      dispatch(updateBudget(res.data));
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultBudget, action) {
  switch (action.type) {
    case GET_BUDGET:
      return action.budgetData;
    case UPDATE_BUDGET:
      return action.budgetData;
    default:
      return state;
  }
}
