import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import BillAlert from "./BillAlert";
import AccountTable from "./AccountTable";
import { Grid, Segment, Divider } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import PieSpending from "./Transactions/PieSpending";
import BarNetIncome from "./Transactions/BarNetIncome";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100);
  }

  render() {
    const { user, transaction, bills } = this.props;

    return (
      <ResponsiveContainer>
        <Segment id="headerBackground" style={{ padding: "0.7em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.7em", paddingTop: "0.7em" }}
              >
                <h3>Dashboard</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <div style={{ fontSize: "20px" }}>
              Welcome back {user.firstName} {user.lastName}
              <br />
              Last login time:
              {user &&
                user.updatedAt.split("T")[0] +
                  " " +
                  user.updatedAt.split("T")[1].slice(0, 8)}
            </div>
            <Divider section />
            <Grid>
              <Grid.Column width={10}>
                <h4>Account Summary</h4>
                <AccountTable />
              </Grid.Column>

              <Grid.Column width={6}>
                {bills.id ? <BillAlert /> : null}
              </Grid.Column>
            </Grid>
            <Divider section />
            <h4>Transactions</h4>
            <Grid>
              <Grid.Column width={8}>
                {transaction ? (
                  <div>
                    <PieSpending rows={transaction} />
                  </div>
                ) : null}
              </Grid.Column>
              <Grid.Column width={8}>
                {transaction ? <BarNetIncome rows={transaction} /> : null}
              </Grid.Column>
            </Grid>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
          </div>
        )}
        <Footer />
      </ResponsiveContainer>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    email: state.user.email,
    accounts: state.accounts,
    transaction: state.transactions.transaction,
    bills: state.bills
  };
};

export default connect(mapState)(UserHome);
