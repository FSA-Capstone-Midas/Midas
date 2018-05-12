import _ from "lodash";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchRetirementDetails } from "../store";

const tableData = [
  {
    age: "John",
    startingPortfolioValueAvg: 15,
    startingPortfolioValuePoor: "Male",
    startingPortfolioValueGood: "hehe",
    savingOrSpending: "hehe",
    cashFlow: "hehe",
  },
  {
    age: "Amber",
    startingPortfolioValueAvg: 40,
    startingPortfolioValuePoor: "Female",
    startingPortfolioValueGood: "hehe",
    savingOrSpending: "hehe",
    cashFlow: "hehe",
  },
  {
    age: "Leslie",
    startingPortfolioValueAvg: 25,
    startingPortfolioValuePoor: "Female",
    startingPortfolioValueGood: "hehe",
    savingOrSpending: "dada",
    cashFlow: "hehe",
  },
  {
    age: "Ben",
    startingPortfolioValueAvg: 70,
    startingPortfolioValuePoor: "Male",
    startingPortfolioValueGood: "dodo",
    savingOrSpending: "hehe",
    cashFlow: "lala",
  },
];

function createData(form) {
  const result = [];
  const {
    birthyear,
    earnEachYear,
    martialStatus,
    monthlyRetirementSpending,
    retirementage,
    saveEachYear,
    savedSoFar,
  } = form;

  console.log("what is form in function", form);
  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - birthyear;
  const deathYear = 95;
  let num = 0;
  for (let i = currentAge; i <= deathYear; i++) {
    if (i === currentAge) {
      const avgMarket = savedSoFar;
      const poorMarket = savedSoFar;
      const goodMarket = savedSoFar;
      const beginningSaving = saveEachYear + earnEachYear;
      result.push({
        year: num,
        age: i,
        startingPortfolioValueAvg: avgMarket,
        startingPortfolioValuePoor: poorMarket,
        startingPortfolioValueGood: goodMarket,
        savingOrSpending: beginningSaving,
        cashFlow:
          martialStatus === "single"
            ? beginningSaving - 80000
            : beginningSaving - 100000,
      });
      num++;
    } else if (i > currentAge && i < retirementage) {
      const avgMarket =
        savedSoFar * Math.pow(1 + 0.7 / 12, 12) +
        result[num - 1].savingOrSpending;
      const poorMarket =
        savedSoFar * Math.pow(1 + 0.02 / 12, 12) +
        result[num - 1].savingOrSpending;
      const goodMarket =
        savedSoFar * Math.pow(1 + 0.15 / 12, 12) +
        result[num - 1].savingOrSpending;
      const beginningSaving =
        result[num - 1].savingOrSpending + saveEachYear + earnEachYear;
      result.push({
        year: num,
        age: i,
        startingPortfolioValueAvg: Math.round(avgMarket, 0),
        startingPortfolioValuePoor: Math.round(poorMarket, 0),
        startingPortfolioValueGood: Math.round(goodMarket, 0),
        savingOrSpending: Math.round(beginningSaving, 0),
        cashFlow:
          martialStatus === "single"
            ? Math.round(beginningSaving - 80000, 0)
            : Math.round(beginningSaving - 100000, 0),
      });
      num++;
    } else {
      const avgMarket =
        savedSoFar * Math.pow(1 + 0.7 / 12, 12) +
        result[num - 1].savingOrSpending;
      const poorMarket =
        savedSoFar * Math.pow(1 + 0.02 / 12, 12) +
        result[num - 1].savingOrSpending;
      const goodMarket =
        savedSoFar * Math.pow(1 + 0.15 / 12, 12) +
        result[num - 1].savingOrSpending;
      const beginningSaving =
        result[num - 1].savingOrSpending - monthlyRetirementSpending;
      result.push({
        year: num,
        age: i,
        startingPortfolioValueAvg: Math.round(avgMarket),
        startingPortfolioValuePoor: Math.round(poorMarket),
        startingPortfolioValueGood: Math.round(goodMarket),
        savingOrSpending: Math.round(beginningSaving),
        cashFlow:
          martialStatus === "single"
            ? Math.round(beginningSaving - 80000)
            : Math.round(beginningSaving - 100000),
      });
      num++;
    }
  }
  return result;
}

class RetirementTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: null,
      data: createData(props.form),
      direction: null,
    };
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending",
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  render() {
    console.log("what is this.state.data", this.state.data);
    const { column, data, direction } = this.state;
    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "year" ? direction : null}
              onClick={this.handleSort("year")}
            >
              Year
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "age" ? direction : null}
              onClick={this.handleSort("age")}
            >
              Age
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "startingPortfolioValueAvg" ? direction : null}
              onClick={this.handleSort("startingPortfolioValueAvg")}
            >
              Starting Portfolio Value (Avgerage Market)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                column === "startingPortfolioValuePoor" ? direction : null
              }
              onClick={this.handleSort("startingPortfolioValuePoor")}
            >
              Starting Portfolio Value (Poor Market)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                column === "startingPortfolioValueGood" ? direction : null
              }
              onClick={this.handleSort("startingPortfolioValueGood")}
            >
              Starting Portfolio Value (Good Market)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "savingOrSpending" ? direction : null}
              onClick={this.handleSort("savingOrSpending")}
            >
              Basic Saving or Retirement Spending
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "cashFlow" ? direction : null}
              onClick={this.handleSort("cashFlow")}
            >
              Cash Flow
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({
              year,
              startingPortfolioValueAvg,
              startingPortfolioValuePoor,
              age,
              startingPortfolioValueGood,
              savingOrSpending,
              cashFlow,
            }) => (
              <Table.Row key={age}>
                <Table.Cell>{year}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{startingPortfolioValueAvg}</Table.Cell>
                <Table.Cell>{startingPortfolioValuePoor}</Table.Cell>
                <Table.Cell>{startingPortfolioValueGood}</Table.Cell>
                <Table.Cell>{savingOrSpending}</Table.Cell>
                <Table.Cell>{cashFlow}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.accounts.accountInfo,
    transaction: state.transactions.transaction,
    form: state.form,
    user: state.user,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRetirementDetails: userId => dispatch(fetchRetirementDetails(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RetirementTable);
