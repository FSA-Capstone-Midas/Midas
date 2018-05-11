import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import Footer from "./Footer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

class Goals extends Component {
  render() {
    return (
      <ResponsiveContainer>
        hi
        <Footer />
      </ResponsiveContainer>
    );
  }
}

export default Goals;
