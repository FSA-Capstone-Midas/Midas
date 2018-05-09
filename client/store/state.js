import axios from "axios";

const initialState = {};

const GET_ALLSTATE = "GET_ALLSTATE";

const getAllState = information => ({
  type: GET_ALLSTATE,
  information
});

// get transaction from api
export const fetchAllState = () => dispatch => {
  return axios
    .get("/api/state/all")
    .then(res => {
      return dispatch(getAllState(res.data));
    })
    .catch(err => console.error(err));
};

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALLSTATE:
      return action.information;
    default:
      return state;
  }
}
