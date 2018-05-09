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
import DataMapApartmentsMMRentChange from "./DataMapApartmentsMMRentChange";
import DataMapApartmentYYRentChange from "./DataMapApartmentYYRentChange";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class UserTrend extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer>
          <h4 className="ui header">Average Housing Price - Year ended 2018</h4>
          <Segment>
            {/* <DataMap /> */}
            {/* <DataMapApartments /> */}
            {/* <DataMapApartments2Br /> */}
            {/* <DataMapApartmentsMMRentChange /> */}
            {/* <DataMapApartmentYYRentChange /> */}
          </Segment>
        </ResponsiveContainer>
        <Footer />
      </div>
    );
  }
}

export default UserTrend;
