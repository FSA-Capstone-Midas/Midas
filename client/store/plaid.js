import axios from "axios";

const initialState = {};

const GET_ACCESSTOKEN = "GET_ACCESSTOKEN";
// const GET_ACCOUNT = "GET_ACCOUNT";
// const GET_TRANSACTION = "GET_TRANSACTION";

// const getTransaction = information => ({
//   type: GET_TRANSACTION,
//   information
// });

const getInformation = information => ({
  type: GET_ACCESSTOKEN,
  information
});

// const getItem = item => ({
//   type: GET_ACCOUNT,
//   item
// });

export const fetchInformation = publicToken => dispatch => {
  //   console.log(publicToken, "did i get smth?");
  return axios
    .post("/api/plaid/get_access_token", { publicToken })
    .then(res => dispatch(getInformation(res.data)))
    .catch(err => console.error(err));
};

// fetch accounts from api
// export const fetchItem = () => dispatch => {
//   return axios
//     .get("/api/plaid/auth") //fetch accounts
//     .then(res => {
//       return dispatch(getItem(res.data));
//     })
//     .catch(err => console.error(err));
// };

// get transaction from api
// export const fetchTransaction = () => dispatch => {
//   return axios
//     .get("/api/plaid/transactions")
//     .then(res => {
//       return dispatch(getTransaction(res.data));
//     })
//     .catch(err => console.error(err));
// };

//waiting for plaid api approve
export const fetchAsset = () => dispatch => {
  return axios
    .get("/api/plaid/asset_report")
    .then(res => {
      return dispatch(getItem(res.data));
    })
    .catch(err => console.error(err));
};

//waiting for plaid api approve
export const fetchMakingAsset = () => dispatch => {
  return axios
    .post("/api/plaid/asset_report/create")
    .then(res => {
      return dispatch(getItem(res.data));
    })
    .catch(err => console.error(err));
};

//waiting for plaid api approve
export const fetchIdentity = () => dispatch => {
  return axios
    .get("/api/plaid/identity")
    .then(res => {
      return dispatch(getItem(res.data));
    })
    .catch(err => console.error(err));
};

//waiting for plaid api approve
export const fetchIncome = () => dispatch => {
  return axios
    .get("/api/plaid/income")
    .then(res => dispatch(getItem(res.data)))
    .catch(err => console.error(err));
};

export default function plaidReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCESSTOKEN:
      return action.information;
    default:
      return state;
  }
}
