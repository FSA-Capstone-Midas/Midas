import axios from "axios";
import { demoTransaction } from "../../script/seedFileForDeploy";

const initialState = {};

const GET_TRANSACTION = "GET_TRANSACTION";

const getTransaction = information => ({
  type: GET_TRANSACTION,
  information
});

// get transaction from api
export const fetchTransaction = () => dispatch => {
  return axios
    .get("/api/plaid/transactions")
    .then(res => {
      dispatch(getTransaction(demoTransaction));
    })
    .catch(err => console.error(err));
};

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION:
      return action.information;
    default:
      return state;
  }
}
