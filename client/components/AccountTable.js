import React from "react";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const AccountTable = props => {
  const { account } = props;
  console.log(account);
  return (
    <Segment>
      {account &&
        account.map(each => {
          if (each.type === "depository") {
            return (
              <table className="ui celled table" key={each.account_id}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>balances</th>
                    <th>subtype</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{each.name}</td>
                    <td>${each.balances.available}</td>
                    <td>{each.subtype}</td>
                  </tr>
                </tbody>
              </table>
            );
          } else if (each.type === "credit") {
            return (
              <table className="ui celled table" key={each.account_id}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>balances available</th>
                    <th>balances current</th>
                    <th>limit</th>
                    <th>subtype</th>
                    <th>Creadit card name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{each.name}</td>
                    <td>${each.balances.available}</td>
                    <td>${each.balances.current}</td>
                    <td>${each.balances.limit}</td>
                    <td>{each.subtype}</td>
                    <td>{each.official_name}</td>
                  </tr>
                </tbody>
              </table>
            );
          }
        })}
    </Segment>
  );
};

const mapState = state => {
  return { account: state.plaid.account.accounts };
};

export default withRouter(connect(mapState)(AccountTable));
