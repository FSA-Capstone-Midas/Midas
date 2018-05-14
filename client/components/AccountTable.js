import React from "react";
import { connect } from "react-redux";
import { Segment, Table, Tab } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const AccountTable = props => {
  const { accounts } = props;
  return (
    <div>
      {accounts &&
        accounts.map(each => {
          if (each.type === "depository") {
            return (
              <Table
                color="blue"
                key={each.account_id}
                inverted
                style={{ fontSize: "15px" }}
              >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Balances</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{each.name}</Table.Cell>
                    <Table.Cell>${each.balances.available}</Table.Cell>
                    <Table.Cell>{each.subtype}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            );
          } else if (each.type === "credit") {
            return (
              <Table
                color="violet"
                key={each.account_id}
                inverted
                style={{ fontSize: "15px" }}
              >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Balances available</Table.HeaderCell>
                    <Table.HeaderCell>Balances current</Table.HeaderCell>
                    <Table.HeaderCell>Limit</Table.HeaderCell>
                    <Table.HeaderCell>Account Type</Table.HeaderCell>
                    <Table.HeaderCell>Creadit Card type</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{each.name}</Table.Cell>
                    <Table.Cell>${each.balances.available}</Table.Cell>
                    <Table.Cell>${each.balances.current}</Table.Cell>
                    <Table.Cell>${each.balances.limit}</Table.Cell>
                    <Table.Cell>{each.subtype}</Table.Cell>
                    <Table.Cell>{each.official_name}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            );
          }
        })}
    </div>
  );
};

const mapState = state => {
  return { accounts: state.accounts.accountInfo };
};

export default withRouter(connect(mapState)(AccountTable));
