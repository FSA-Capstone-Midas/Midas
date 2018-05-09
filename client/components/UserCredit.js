import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import { Grid } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
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

class UserCredit extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer>
          <h4 className="ui header">The average Midas credit score is 800</h4>
          <Segment />
        </ResponsiveContainer>
        <Footer />
      </div>
    );
  }
}

export default UserCredit;
