import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import BillAlert from "./BillAlert";
import AccountTable from "./AccountTable";
import { Grid, Divider, Segment } from "semantic-ui-react";
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
    const fullname =
      user.firstName.charAt(0).toUpperCase() +
      user.firstName.slice(1) +
      " " +
      user.lastName.charAt(0).toUpperCase() +
      user.lastName.slice(1);

    return (
      <ResponsiveContainer>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <Segment
              textAlign="center"
              style={{
                fontSize: "28px",
                backgroundColor: "powderblue"
              }}
            >
              Dashboard
            </Segment>
            <div style={{ fontSize: "20px" }}>
              Welcome back {fullname}
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
                <AccountTable />
              </Grid.Column>

              <Grid.Column width={5}>
                {bills.id ? <BillAlert /> : null}
              </Grid.Column>
            </Grid>
            <Divider section />

            <Grid>
              <Grid.Column width={8}>
                {transaction ? <PieSpending rows={transaction} /> : null}
              </Grid.Column>

              <Grid.Column width={8}>
                {transaction ? <BarNetIncome rows={transaction} /> : null}
              </Grid.Column>
            </Grid>

            <Divider section />
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
