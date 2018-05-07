import axios from "axios";

const GET_ACCESSTOKEN = "GET_ACCESSTOKEN";
const GET_ACCOUNT = "GET_ACCOUNT";
const GET_TRANSACTION = "GET_TRANSACTION";

const getTransaction = information => ({
  type: GET_TRANSACTION,
  information
});
const getInformation = information => ({
  type: GET_ACCESSTOKEN,
  information
});

const getItem = item => ({
  type: GET_ACCOUNT,
  item
});

export const fetchInformation = publicToken => dispatch => {
  //   console.log(publicToken, "did i get smth?");
  return axios
    .post("/get_access_token", { publicToken })
    .then(res => dispatch(getInformation(res.data)))
    .catch(err => console.error(err));
};
export const fetchItem = () => dispatch => {
  return axios
    .get("/auth")
    .then(res => {
      // console.log("res!!!", res.data);
      return dispatch(getItem(res.data));
    })
    .catch(err => console.error(err));
};

export const fetchTransaction = () => dispatch => {
  return axios
    .get("/transactions")
    .then(res => {
      // console.log("res!!!", res.data);
      return dispatch(getItem(res.data));
    })
    .catch(err => console.error(err));
};

export const fetchIncome = () => dispatch => {
  //   console.log(publicToken, "did i get smth?");
  return axios
    .get("/income")
    .then(res => dispatch(getItem(res.data)))
    .catch(err => console.error(err));
};

export default function plaidReducer(state = {}, action) {
  switch (action.type) {
    case GET_ACCESSTOKEN:
      return action.information;
    case GET_ACCOUNT:
      return action.item;
    default:
      return state;
  }
}
