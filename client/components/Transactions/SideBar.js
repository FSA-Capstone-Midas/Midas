import React, { Component } from "react";

const SideBar = props => {
  return (
    <div className="four wide column">
      <div className="ui vertical menu" style={{ fontSize: "16px" }}>
        <div className="item">
          <div className="header">Spending</div>
          <div className="menu">
            <a
              className="item"
              name="spendingOverTime"
              onClick={props.handleClick}
            >
              Over Time
            </a>
            <a
              className="item"
              name="sepndingByCategory"
              onClick={props.handleClick}
            >
              By Category
            </a>
          </div>
        </div>
        <div className="item">
          <div className="header">Income</div>
          <div className="menu">
            <a
              className="item"
              name="incomeOverTime"
              onClick={props.handleClick}
            >
              Over Time
            </a>
            <a
              className="item"
              name="incomeByCategory"
              onClick={props.handleClick}
            >
              By Category
            </a>
          </div>
        </div>
        <div className="item">
          <div className="header">Net Income</div>
          <div className="menu">
            <a
              className="item"
              name="netIncomeOverTime"
              onClick={props.handleClick}
            >
              Over Time
            </a>
          </div>
        </div>
        <div className="item">
          <div className="header">Net Worth</div>
          <div className="menu">
            <a
              className="item"
              name="netWorthOverTime"
              onClick={props.handleClick}
            >
              Over Time
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
