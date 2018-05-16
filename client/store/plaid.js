import axios from "axios";
import history from "../history";

const initialState = {};

const GET_ACCESSTOKEN = "GET_ACCESSTOKEN";

const getInformation = information => ({
  type: GET_ACCESSTOKEN,
  information
});

export const fetchInformation = successToken => dispatch => {
  return axios
    .post("/api/plaid/get_access_token", { successToken })
    .then(res => {
      console.log(res.data);
      dispatch(getInformation("Successfully linked to Account"));
      if (!res.data.error) {
        history.push("/home");
      }
    })
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
