import PropTypes from "prop-types";
import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import { connect } from "react-redux";
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const UserHome = () => (
  <ResponsiveContainer>
    <Segment>
      <h1>Pie chart (RIght)</h1>
    </Segment>
    <Segment>
      <h1>Account info (LEFT)</h1>
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
  </ResponsiveContainer>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
