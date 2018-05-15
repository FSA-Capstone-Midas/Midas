import React, { Component } from "react";
import { connect } from "react-redux";
import { HorizontalBar } from "react-chartjs-2";

function sumCategory(items, category) {
  return items.reduce((acc, curr) => {
    if (curr.category[0] === category) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
}

class BudgetHorizontalBarChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const budgetArr = this.props.budgetArr;
    const spendingArr = this.props.spendingArr;
    const data = {
      labels: [
        "Food and Drink",
        "Recreation",
        "Travel",
        "Service",
        "Shops",
        "Miscellaneous"
      ],
      datasets: [
        {
          label: "Budget $",
          backgroundColor: "rgba(0,255,0,0.3)",
          borderColor: "rgba(192,192,192,0.3)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0,0,255,0.3)",
          hoverBorderColor: "rgba(192,192,192,0.3)",
          data: budgetArr
        },
        {
          label: "Actual Spending $",
          backgroundColor: "rgba(255,0,0,0.3)",
          borderColor: "rgba(179,181,198,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 0, 0, 0.8)",
          hoverBorderColor: "rgba(255,0,255,0.3)",
          data: spendingArr
        }
      ]
    };
    return (
      <div className="ui segment">
        <h2>Budget</h2>
        <HorizontalBar data={data} />
      </div>
    );
  }
}

const mapState = state => {
  const {
    foodAndDrink,
    recreation,
    travel,
    service,
    shops,
    miscellaneous
  } = state.budget;
  const transactions = state.transactions.transaction.filter(transaction => {
    return transaction.name.slice(0, 13) !== "BOOK TRANSFER";
  });
  const nonMicellaneous = [
    "Food and Drink",
    "Recreation",
    "Service",
    "Shops",
    "Travel"
  ];

  const foodAndDrinkSpending = sumCategory(
    transactions,
    "Food and Drink"
  ).toFixed();
  const recreationSpending = sumCategory(transactions, "Recreation").toFixed();
  const serviceSpending = sumCategory(transactions, "Service").toFixed();
  const shopsSpending = sumCategory(transactions, "Shops").toFixed();
  const travelSpending = sumCategory(transactions, "Travel").toFixed();
  const miscellaneousSpending = transactions
    .reduce((acc, curr) => {
      if (nonMicellaneous.indexOf(curr.category[0]) === -1) {
        return acc + curr.amount;
      }
      return acc;
    }, 0)
    .toFixed();

  return {
    budgetArr: [
      foodAndDrink,
      recreation,
      travel,
      service,
      shops,
      miscellaneous
    ],
    spendingArr: [
      foodAndDrinkSpending,
      recreationSpending,
      travelSpending,
      serviceSpending,
      shopsSpending,
      miscellaneousSpending
    ]
  };
};

export default connect(mapState)(BudgetHorizontalBarChart);
