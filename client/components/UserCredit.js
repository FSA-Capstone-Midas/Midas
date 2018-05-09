import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import { Grid } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { Segment, Progress } from "semantic-react";
import { ProgressBar } from "react-bootstrap";

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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <ResponsiveContainer>
        <div className="ui segment" style={{ height: "67vh" }}>
          <div
            className="ui statistic"
            style={{
              width: "-webkit-fill-available",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <h2
              className="ui header"
              style={{
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              The average Midas credit score is{" "}
            </h2>
            <div className="ui red statistic">
              <div className="value">80</div>
            </div>
            <ProgressBar>
              {" "}
              <ProgressBar striped bsStyle="danger" now={20} key={1} />{" "}
              <ProgressBar bsStyle="warning" now={30} key={2} />{" "}
              <ProgressBar active bsStyle="success" now={30} key={3} />{" "}
            </ProgressBar>
            <a
              href="https://google.com"
              onClick={this.handleClick}
              style={{
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <h2>Check Your Credit Score!</h2>
            </a>
          </div>
        </div>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

export default UserCredit;
