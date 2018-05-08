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

class HorizontalBarChart extends Component {
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
        "Service",
        "Shops",
        "Travel",
        "Miscellaneous"
      ],
      datasets: [
        {
          label: "Budget",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: budgetArr
        },
        {
          label: "Actual Spending",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
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
  const foodAndDrink = state.user.foodAndDrink;
  const recreation = state.user.recreation;
  const travel = state.user.travel;
  const service = state.user.service;
  const shop = state.user.shop;
  const miscellaneous = state.user.miscellaneous;
  const transactions = state.plaid.transaction.transaction;
  const nonMicellaneous = [
    "Food and Drink",
    "Recreation",
    "Service",
    "Shops",
    "Travel"
  ];
  console.log("what is transactions", transactions);
  const foodAndDrinkSpending = sumCategory(transactions, "Food and Drink");
  console.log("foodanddrink", foodAndDrinkSpending);
  const recreationSpending = sumCategory(transactions, "Recreation");
  const serviceSpending = sumCategory(transactions, "Service");
  const shopsSpending = sumCategory(transactions, "Shops");
  const travelSpending = sumCategory(transactions, "Travel");
  const miscellaneousSpending = transactions.reduce((acc, curr) => {
    if (nonMicellaneous.indexOf(curr.category[0]) === -1) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
  return {
    budgetArr: [foodAndDrink, recreation, travel, service, shop, miscellaneous],
    spendingArr: [
      foodAndDrinkSpending,
      recreationSpending,
      serviceSpending,
      shopsSpending,
      travelSpending,
      miscellaneousSpending
    ]
  };
};

export default connect(mapState)(HorizontalBarChart);
