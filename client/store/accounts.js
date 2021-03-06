import axios from "axios";
import { demoAccounts } from "../../script/seedFileForDeploy";

const initialState = {};

const GET_ACCOUNTS = "GET_ACCOUNTS";

const getItem = item => ({
  type: GET_ACCOUNTS,
  item
});

// fetch accounts from api
export const fetchItem = () => dispatch => {
  return axios
    .get("/api/plaid/auth")
    .then(res => {
      if (res.data.error) {
        dispatch(getItem(demoAccounts));
      } else {
        dispatch(getItem(res.data || demoAccounts));
      }
    })
    .catch(err => console.error(err));
};

export default function accounts(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return action.item;
    default:
      return state;
  }
}
