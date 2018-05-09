import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import Loading from "./Loading";
import Plaid from "./Plaid";
import AccountTable from "./AccountTable";
import { Segment } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
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
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    const { accounts } = this.props;
    console.log(accounts);
    return (
      <ResponsiveContainer>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Segment>
            <Segment>
              <Plaid />
            </Segment>
            <AccountTable />
            <Segment>
              <h1>Account info (LEFT NEV)</h1>
              <Segment>
                <h1>Cash</h1>
              </Segment>
              <Segment>
                <h1>Credit Cards</h1>
              </Segment>
              <Segment>
                <h1>Loans</h1>
              </Segment>
              <Segment>
                <h1>Investments</h1>
              </Segment>
              <Segment>
                <h1>Propertys</h1>
              </Segment>
            </Segment>
            <Segment>
              <h1>Suggested offers</h1>
            </Segment>
            <Segment>
              <h1>Spending</h1>
            </Segment>
          </Segment>
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
    email: state.user.email,
    accounts: state.accounts
  };
};

export default connect(mapState)(UserHome);
