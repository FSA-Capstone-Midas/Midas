import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import BillAlert from "./BillAlert";
import PhoneAlert from "./PhoneAlert";
import AccountTable from "./AccountTable";
import { Grid, Divider, Segment, Container } from "semantic-ui-react";
import GoalsMenu from "./Goals/GoalsMenu";
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
    const { user, transaction, bills, phone } = this.props;
    const fullname =
      user.firstName.charAt(0).toUpperCase() +
      user.firstName.slice(1) +
      " " +
      user.lastName.charAt(0).toUpperCase() +
      user.lastName.slice(1);

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
            <div
              style={{ fontSize: "20px", marginLeft: "85%", paddingTop: "1em" }}
            >
              Welcome back {fullname}
              <br />
              Last login time:
              {user &&
                user.updatedAt.split("T")[0] +
                  " " +
                  user.updatedAt.split("T")[1].slice(0, 8)}
            </div>
            <Divider section />
            <Container style={{ width: "70%" }}>
              <Grid
                style={{
                  width: "-webkit-fill-available",
                  justifyContent: "space-between"
                }}
              >
                <Grid.Column width={10}>
                  <h4>Account Summary</h4>
                  <AccountTable />
                </Grid.Column>

                <Grid.Column width={5}>
                  <h4>Bills Summary</h4>
                  {bills.id ? (
                    <BillAlert />
                  ) : (
                    <h3 style={{ color: "green" }}>
                      {" "}
                      YAY You currently have no bills{" "}
                    </h3>
                  )}
                  {phone.id ? <PhoneAlert /> : null}
                </Grid.Column>
              </Grid>
            </Container>
            <Divider section />
            <h4 style={{ marginLeft: "14.5%" }}>Transactions</h4>
            <Grid style={{ marginLeft: "20em", marginRight: "15%" }}>
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

            <Divider section />
            <Container>
              <Grid>
                <h4>Goals</h4>
                <GoalsMenu />
              </Grid>
            </Container>
            <div />
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
    bills: state.bills,
    phone: state.phone
  };
};

export default connect(mapState)(UserHome);
