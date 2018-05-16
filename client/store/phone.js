import axios from "axios";
import history from "../history";

const UPDATE_PHONE = "UPDATE_PHONE";
const GET_PHONE = "GET_PHONE";

const defaultUser = {};

const updatePhoneBill = phone => ({ type: UPDATE_PHONE, phone });
const getPhoneBill = phone => ({ type: GET_PHONE, phone });

export const updatePhone = phone => dispatch =>
  axios
    .post("/api/phone", phone)
    .then(res => {
      dispatch(updatePhoneBill(res.data));
      history.push("/home");
    })
    .catch(err => console.log(err));

export const fetchPhone = id => dispatch =>
  axios
    .get(`/api/phone/user/${id}`)
    .then(res => {
      dispatch(getPhoneBill(res.data));
    })
    .catch(err => console.log(err));

export default function(state = defaultUser, action) {
  switch (action.type) {
    case UPDATE_PHONE:
      return action.phone;
    case GET_PHONE:
      return Object.assign({}, state, action.phone);
    default:
      return state;
  }
}
