/* global describe beforeEach afterEach it */

import { expect } from "chai";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import history from "../history";

import budget, {
  GET_BUDGET,
  UPDATE_BUDGET,
  getBudget,
  updateBudget,
  getBudgetFromDatabase,
  updateUserBudget
} from "./budget";
import { reducer } from "./index";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

const initialState = {};

const mockBudgetState = {
  miscellaneous: 500,
  recreation: 1000,
  service: 2000,
  shops: 1000,
  travel: 3000
};
const mockBudgetItem = {
  service: 8888
};

describe("The `budget` slice of state", () => {
  describe("action creators", () => {
    describe("updateBudget", () => {
      it("Returns an object with a type of UPDATE_BUDGET and a value deep equaling the new budget object to update", () => {
        const updatedBudgetItem = updateBudget(mockBudgetItem);
        expect(updatedBudgetItem.type).to.equal(UPDATE_BUDGET);
        expect(updatedBudgetItem.budgetData).to.deep.equal(mockBudgetItem);
      });
    });
    describe("getBudget", () => {
      it("Returns an object with a type of GET_BUDGET and a value deep equaling the budget data obtained", () => {
        const getBudgetData = getBudget(mockBudgetItem);
        expect(getBudgetData.type).to.equal(GET_BUDGET);
        expect(getBudgetData.budgetData).to.deep.equal(mockBudgetItem);
      });
    });
  });
});
