import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import Loading from "./Loading";
import Plaid from "./Plaid";
import AccountTable from "./AccountTable";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 }
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 }
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 }
];

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

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
