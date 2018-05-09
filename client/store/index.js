import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import plaidReducer from "./plaid";
import transactions from "./transactions";
import accounts from "./accounts";
import budget from "./budget";

const reducer = combineReducers({
  user,
  plaid: plaidReducer,
  transactions,
  accounts,
  budget
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
