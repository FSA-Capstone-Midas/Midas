import axios from "axios";
import history from "../history";

const UPDATE_RENT = "UPDATE_RENT";
const GET_RENT = "GET_RENT";

const defaultUser = {};

const updateUserRent = rent => ({ type: UPDATE_RENT, rent });
// const getUserRent = rent => ({ type: GET_RENT, rent });
function getUserRent(rent) {
  return {
    type: GET_RENT,
    rent
  };
}

export const updateRent = rent => dispatch =>
  axios
    .post("/api/rent", rent)
    .then(res => {
      dispatch(updateUserRent(res.data));
      history.push("/home");
    })
    .catch(err => console.log(err));

export const fetchRent = id => dispatch =>
  axios
    .get(`/api/rent/user/${id}`)
    .then(res => {
      dispatch(getUserRent(res.data));
    })
    .catch(err => console.log(err));

export default function(state = defaultUser, action) {
  switch (action.type) {
    case UPDATE_RENT:
      return action.rent;
    case GET_RENT:
      return Object.assign({}, state, action.rent);
    default:
      return state;
  }
}
