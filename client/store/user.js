import axios from "axios";
import history from "../history";
import { fetchInformation, fetchItem } from "./plaid";

/**
 * ACTION TYPES
 */
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_USER = "UPDATE USER";

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const updateUser = user => ({ type: GET_USER, user });
/**
 * THUNK CREATORS
 */
export const me = () => dispatch =>
  axios
    .get("/auth/me")
    .then(res => {
      dispatch(getUser(res.data || defaultUser));
    })
    .catch(err => console.log(err));

export const updateProfile = (id, profile) => dispatch =>
  axios
    .put(`/api/users/update/${id}`, profile)
    .then(res => {
      dispatch(updateUser(res.data));
    })
    .catch(err => console.log(err));

export const auth = (
  email,
  password,
  method,
  firstName,
  lastName
) => dispatch =>
  axios
    .post(`/auth/${method}`, { firstName, lastName, email, password })
    .then(
      res => {
        dispatch(getUser(res.data));
        history.push("/home");
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const logout = () => dispatch =>
  axios
    .post("/auth/logout")
    .then(_ => {
      dispatch(removeUser());
      history.push("/login");
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
