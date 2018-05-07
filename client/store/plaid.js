import axios from "axios";

const GET_INFORMATION = "GET_INFORMATION";
const GET_ITEM = "GET_ITEM";
const getInformation = information => ({
  type: GET_INFORMATION,
  information
});

const getItem = item => ({
  type: GET_ITEM,
  item
});

export const fetchInformation = publicToken => dispatch => {
  //   console.log(publicToken, "did i get smth?");
  return axios
    .post("/plaid/get_access_token", { publicToken })
    .then(res => dispatch(getInformation(res.data)))
    .catch(err => console.error(err));
};
export const fetchItem = () => dispatch => {
  return axios
    .get("/plaid/auth")
    .then(res => {
      console.log("res!!!", res.data);
      return dispatch(getItem(res.data));
    })
    .catch(err => console.error(err));
};

export default function plaidReducer(state = {}, action) {
  switch (action.type) {
    case GET_INFORMATION:
      return action.information;
    case GET_ITEM:
      return action.item;
    default:
      return state;
  }
}
