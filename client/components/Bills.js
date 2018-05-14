import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import BillForm from "./BillForm";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

class Bills extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <BillForm />
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  return {};
};

export default connect(mapState)(Bills);
