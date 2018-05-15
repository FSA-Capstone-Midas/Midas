import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Login,
  SignUp,
  UserHome,
  HomePage,
  AboutUs,
  HowItWorks,
  UserTrend,
  Transactions,
  Profile,
  Budget,
  UserCredit,
  Goals,
  SaveForEmergencyMainPage,
  House,
  Retirement,
  RetirementResult,
  Bills,
  BillForm
} from "./components";
import {
  me,
  fetchTransaction,
  fetchItem,
  getBudgetFromDatabase,
  fetchEmergencyGoal,
  fetchRetirementDetails,
  fetchAllState,
  fetchRent,
  fetchPhone
} from "./store";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.loadAccountsFromPlaid();
    this.props.loadTransactionsFromPlaid();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== nextProps.user.id) {
      this.props.fetchRetirementDetails(nextProps.user.id);
      this.props.loadBudgetData(nextProps.user.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== nextProps.user.id) {
      this.props.fetchRent(nextProps.user.id);
      this.props.fetchPhone(nextProps.user.id);
    }
  }
  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/howitworks" component={HowItWorks} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route exact path="/transactions" component={Transactions} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/trend" component={UserTrend} />
            <Route exact path="/profile" component={Profile} />
            <Route
              exact
              path="/retirement/analysis"
              component={RetirementResult}
            />
            <Route exact path="/retirement" component={Retirement} />
            <Route exact path="/credit" component={UserCredit} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/bills" component={Bills} />
            <Route
              exact
              path="/goals/saveForEmergency"
              component={SaveForEmergencyMainPage}
            />
            <Route exact path="/house" component={House} />

            <Route component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={HomePage} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    loadAccountsFromPlaid() {
      dispatch(fetchItem());
    },
    loadTransactionsFromPlaid() {
      dispatch(fetchTransaction());
    },
    loadBudgetData(userId) {
      dispatch(getBudgetFromDatabase(userId));
    },

    fetchRent(id) {
      dispatch(fetchRent(id));
    },
    fetchPhone(id) {
      dispatch(fetchPhone(id));
    },
    fetchRetirementDetails(id) {
      dispatch(fetchRetirementDetails(id));
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
