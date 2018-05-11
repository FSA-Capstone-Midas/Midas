import _ from "lodash";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

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

class Step4Table extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
  };

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
    const { column, data, direction } = this.state;

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "age" ? direction : null}
              onClick={this.handleSort("age")}
            >
              age
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "startingPortfolioValueAvg" ? direction : null}
              onClick={this.handleSort("startingPortfolioValueAvg")}
            >
              startingPortfolioValueAvg
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                column === "startingPortfolioValuePoor" ? direction : null
              }
              onClick={this.handleSort("startingPortfolioValuePoor")}
            >
              startingPortfolioValuePoor
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                column === "startingPortfolioValueGood" ? direction : null
              }
              onClick={this.handleSort("startingPortfolioValueGood")}
            >
              startingPortfolioValueGood
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "savingOrSpending" ? direction : null}
              onClick={this.handleSort("savingOrSpending")}
            >
              savingOrSpending
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "cashFlow" ? direction : null}
              onClick={this.handleSort("cashFlow")}
            >
              cashFlow
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({
              startingPortfolioValueAvg,
              startingPortfolioValuePoor,
              age,
              startingPortfolioValueGood,
              savingOrSpending,
              cashFlow,
            }) => (
              <Table.Row key={age}>
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

export default Step4Table;
