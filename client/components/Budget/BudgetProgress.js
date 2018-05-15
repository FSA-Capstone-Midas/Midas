import React from "react";
import { connect } from "react-redux";
import { Progress, Segment } from "semantic-ui-react";

const BudgetProgress = props => {
  const totalBudgetExpenditure = props.budget.totalBudgetExpenditure;
  const actualSpending = props.actualSpending;
  const spendingRatio = totalBudgetExpenditure
    ? (actualSpending * 100 / totalBudgetExpenditure).toFixed(2)
    : 0;

  return (
    <div>
      {spendingRatio ? (
        <h4>{`You have spent ${spendingRatio}% of your budget.`}</h4>
      ) : (
        <h4>
          We can only track your spending progress after you have set up your
          budget.
        </h4>
      )}
      <Progress percent={spendingRatio} indicating />
    </div>
  );
};

const mapState = state => {
  const actualSpending = state.transactions.transaction
    .filter(item => {
      return item.name.slice(0, 13) !== "BOOK TRANSFER";
    })
    .reduce((prev, next) => {
      return prev + next.amount;
    }, 0);
  const budget = state.budget;

  return {
    actualSpending,
    budget,
  };
};

export default connect(mapState)(BudgetProgress);
