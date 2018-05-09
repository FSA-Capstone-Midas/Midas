import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import { Grid } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import DataMap from "./DataMap";
import { Segment } from "semantic-react";

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
  <div>
    <ResponsiveContainer>
      <h4 className="ui header">Average Housing Price - Year ended 2018</h4>
      <Segment>
        <DataMap />
      </Segment>
    </ResponsiveContainer>
    <Footer />
  </div>
);

export default UserHome;
