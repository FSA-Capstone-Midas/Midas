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
                color="teal"
                key={each.account_id}
                inverted
                style={{ fontSize: "15px" }}
              >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width={8}>Name</Table.HeaderCell>
                    <Table.HeaderCell witdh={4}>Balance</Table.HeaderCell>
                    <Table.HeaderCell witdh={4}>Type</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{each.name}</Table.Cell>
                    <Table.Cell style={{ color: "lightGreen" }}>
                      ${each.balances.available}
                    </Table.Cell>
                    <Table.Cell>{each.subtype}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            );
          } else if (each.type === "credit") {
            return (
              <Table
                color="blue"
                key={each.account_id}
                inverted
                style={{ fontSize: "15px" }}
              >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width={1}>Name</Table.HeaderCell>
                    <Table.HeaderCell width={4}>
                      Available Balance
                    </Table.HeaderCell>
                    <Table.HeaderCell width={3}>
                      Current Balance
                    </Table.HeaderCell>
                    <Table.HeaderCell width={1}>Limit</Table.HeaderCell>
                    <Table.HeaderCell width={3}>Account Type</Table.HeaderCell>
                    <Table.HeaderCell width={4}>
                      Creadit Card Type
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{each.name}</Table.Cell>
                    <Table.Cell style={{ color: "lightGreen" }}>
                      ${each.balances.available}
                    </Table.Cell>
                    <Table.Cell>${each.balances.current}</Table.Cell>
                    <Table.Cell>${each.balances.limit}</Table.Cell>
                    <Table.Cell>{each.subtype}</Table.Cell>
                    <Table.Cell>{each.official_name.toLowerCase()}</Table.Cell>
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
