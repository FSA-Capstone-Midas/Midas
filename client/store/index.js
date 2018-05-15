import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import plaidReducer from "./plaid";
import transactions from "./transactions";
import accounts from "./accounts";
import budget from "./budget";
import form from "./form";
import retirement from "./retirement";
import houseForm from "./houseForm";
import stateReducer from "./state";
import bills from "./bills";
import phone from "./phone";
import emergencyGoalReducer from "./emergencyGoal";

const reducer = combineReducers({
  user,
  plaid: plaidReducer,
  transactions,
  accounts,
  budget,
  form,
  retirement,
  houseForm,
  bills,
  states: stateReducer,
  emergencyGoalReducer,
  phone
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from "./user";
export * from "./plaid";
export * from "./transactions";
export * from "./accounts";
export * from "./state";
export * from "./budget";
export * from "./form";
export * from "./retirement";
export * from "./houseForm";
export * from "./bills";
export * from "./emergencyGoal";
export * from "./phone";
