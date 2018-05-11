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
  SaveForEmergency
} from "./components";
import { me, fetchTransaction, fetchItem, fetchAllState } from "./store";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.loadAccountsFromPlaid();
    this.props.loadTransactionsFromPlaid();
    this.props.loadAllStateFromServer();
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
            <Route exact path="/credit" component={UserCredit} />
            <Route exact path="/goals" component={Goals} />
            <Route
              exact
              path="/saveForEmergency"
              component={SaveForEmergency}
            />
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
    isLoggedIn: !!state.user.id
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
    loadAllStateFromServer() {
      dispatch(fetchAllState());
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
