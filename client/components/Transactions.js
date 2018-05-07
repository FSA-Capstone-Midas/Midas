import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
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

class Transactions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    console.log(this.props.accounts);
    return (
      <ResponsiveContainer>
        <Segment>Hi</Segment>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  return {
    accounts: state.plaid.accounts
  };
};

export default connect(mapState)(Transactions);
