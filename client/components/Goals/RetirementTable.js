import _ from "lodash";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchRetirementDetails } from "../../store";

class RetirementTable extends Component {
  state = {
    column: null,
    data: this.props.objWithAllProperty,
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
              sorted={column === "averageMarket" ? direction : null}
              onClick={this.handleSort("averageMarket")}
            >
              Portfolio Bal (avg)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "poorMarket" ? direction : null}
              onClick={this.handleSort("poorMarket")}
            >
              Portfolio Bal (poor)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "goodMarket" ? direction : null}
              onClick={this.handleSort("goodMarket")}
            >
              Portfolio Bal (good)
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
              age,
              "Average Market": averageMarket,
              "Poor Market": poorMarket,
              "Good Market": goodMarket,
              savingOrSpending,
              cashFlow,
            }) => (
              <Table.Row key={age}>
                <Table.Cell>{year}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{averageMarket}</Table.Cell>
                <Table.Cell>{poorMarket}</Table.Cell>
                <Table.Cell>{goodMarket}</Table.Cell>
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
    retirement: state.retirement,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRetirementDetails: userId => dispatch(fetchRetirementDetails(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RetirementTable);
