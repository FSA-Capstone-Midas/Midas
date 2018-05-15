import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../Footer";
import Loading from "../Loading";
import BudgetHorizontalBarChart from "./BudgetHorizontalBarChart";
import BudgetModal from "./BudgetModal";
import BudgetProgress from "./BudgetProgress";
import { Grid, Segment } from "semantic-ui-react";
import DesktopContainer from "../AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "../AfterLogin/AfterLoginMobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 4000);
    $("table").tablesort();
  }

  render() {
    return (
      <ResponsiveContainer>
        <Segment id="headerBackground" style={{ padding: "0.7em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.7em", paddingTop: "0.7em" }}
              >
                <h3>Budget</h3>
                <h4>Manage your budget.</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Grid celled="internally" columns="equal" stackable id="mainContent">
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "0.5em", paddingTop: "2em" }}>
              {this.state.loading ? (
                <Loading />
              ) : (
                <div>
                  <div>
                    <BudgetModal />
                    <BudgetProgress />
                    <BudgetHorizontalBarChart />
                  </div>
                  <Footer />
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  return {
    account: state.plaid.account,
    transaction: state.plaid.transaction,
  };
};

export default connect(mapState)(Budget);

// <Segment
// id="howItWorksBackground"
// style={{ padding: "1.5em" }}
// vertical
// >
