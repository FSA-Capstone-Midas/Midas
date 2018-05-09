import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import { Grid } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { Segment } from "semantic-react";
import DataMapApartments from "./DataMapApartments";
import DataMapApartments2Br from "./DataMapApartments2Br";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const UserTrend = () => (
  <div>
    <ResponsiveContainer>
      <h4 className="ui header">Average Housing Price - Year ended 2018</h4>
      <Segment>
        {/* <DataMap /> */}
        {/* <DataMapApartments /> */}
        <DataMapApartments2Br />
      </Segment>
    </ResponsiveContainer>
    <Footer />
  </div>
);

export default UserTrend;
