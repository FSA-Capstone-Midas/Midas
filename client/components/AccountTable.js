import React from "react";
import { connect } from "react-redux";
import { Segment, Table, Tab } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const AccountTable = props => {
  const { accounts } = props;
  return (
    <Segment>
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
                    <Table.HeaderCell>balances</Table.HeaderCell>
                    <Table.HeaderCell>subtype</Table.HeaderCell>
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
                    <Table.HeaderCell>balances available</Table.HeaderCell>
                    <Table.HeaderCell>balances current</Table.HeaderCell>
                    <Table.HeaderCell>limit</Table.HeaderCell>
                    <Table.HeaderCell>subtype</Table.HeaderCell>
                    <Table.HeaderCell>Creadit card name</Table.HeaderCell>
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
    </Segment>
  );
};

const mapState = state => {
  return { accounts: state.accounts.accountInfo };
};

export default withRouter(connect(mapState)(AccountTable));
