import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment, Button } from "semantic-ui-react";
import BillForm from "./BillForm";
import BillAlert from "./BillAlert";

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
  //set up number of goals of each user
  return {};
};

export default connect(mapState)(Bills);
