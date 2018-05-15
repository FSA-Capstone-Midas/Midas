import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import BillAlert from "./BillAlert";
import PhoneAlert from "./PhoneAlert";
import AccountTable from "./AccountTable";
import { Grid, Divider } from "semantic-ui-react";
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
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <div>
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
                <AccountTable />
              </Grid.Column>

              <Grid.Column width={6}>
                {bills.id ? <BillAlert /> : null}
                {bills.id ? <PhoneAlert /> : null}
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
