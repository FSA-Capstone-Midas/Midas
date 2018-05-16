import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import BillAlert from "./BillAlert";
import PhoneAlert from "./PhoneAlert";
import AccountTable from "./AccountTable";
import {
  Grid,
  Divider,
  Segment,
  Container,
  Responsive,
  Feed,
  Icon
} from "semantic-ui-react";
import GoalsComponent from "./Goals/GoalsComponent";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import PieSpending from "./Transactions/PieSpending";
import BarNetIncome from "./Transactions/BarNetIncome";
import UserHomeCalender from "./UserHomeCalender";
import Words from "./Words";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const notMobile = { minwidth: Responsive.onlyMobile.maxWidth + 1 };

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    const {
      user,
      transaction,
      bills,
      phone,
      retirement,
      emergency,
      houseForm
    } = this.props;

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
            <Container style={{ width: "80%", paddingTop: "1em" }}>
              <Grid stackable>
                <Grid.Row style={{ marginBottom: "-2%" }}>
                  <Grid.Column width={13}>
                    <Words fullname={fullname} />
                    <div />
                  </Grid.Column>
                  <Grid.Column style={{ float: "rigth" }} width={3}>
                    <p>
                      Last login time: <br />
                      {user &&
                        user.updatedAt.split("T")[0] +
                          " " +
                          user.updatedAt.split("T")[1].slice(0, 8)}
                    </p>
                    <div />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            <Container style={{ width: "80%", paddingTop: "1em" }}>
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h3>Account Summary</h3>
                    <AccountTable />
                  </Grid.Column>

                  <Grid.Column width={6}>
                    <h3>Bills Notifications</h3>
                    {!bills.id || !phone.id ? (
                      <Feed>
                        <Feed.Event>
                          <Feed.Label>
                            <Icon name="pencil" />
                          </Feed.Label>
                          <Feed.Content>
                            <Feed.Date>Today</Feed.Date>
                            <Feed.Summary>
                              YAY You currently have no bills{" "}
                            </Feed.Summary>
                          </Feed.Content>
                        </Feed.Event>
                      </Feed>
                    ) : bills.id && phone.id ? (
                      <div>
                        <BillAlert />
                        <PhoneAlert />
                      </div>
                    ) : bills.id ? (
                      <BillAlert />
                    ) : phone.id ? (
                      <PhoneAlert />
                    ) : null}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            <Divider section />

            <Container style={{ width: "80%", paddingTop: "1em" }}>
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>Transactions</h3>
                    {transaction ? (
                      <div>
                        <PieSpending rows={transaction} />
                      </div>
                    ) : null}
                  </Grid.Column>

                  <Grid.Column width={8}>
                    {transaction ? <BarNetIncome rows={transaction} /> : null}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            <Divider section />
            <Container
              style={{ width: "80%", paddingTop: "1em" }}
              {...notMobile}
            >
              <Grid stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Daily Spending Heat Map</h3>
                    <UserHomeCalender />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            <Divider section />

            <Container
              style={{ width: "80%", paddingTop: "1em", paddingBottom: "3em" }}
            >
              <Grid stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Goals</h3>
                    <GoalsComponent
                      retirement={retirement}
                      houseForm={houseForm}
                      emergency={emergency}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
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
    phone: state.phone,
    houseForm: state.houseForm,
    retirement: state.retirement,
    emergency: state.emergencyGoalReducer
  };
};

export default connect(mapState)(UserHome);
