import PropTypes from "prop-types";
import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import { Grid, Segment, Progress, Container } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
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

const UserCredit = () => (
  <ResponsiveContainer>
    <Container>
      <Segment>
        <Segment style={{ fontSize: "28px", textAlign: "center" }}>
          Credit Score
        </Segment>
        <div
          className="ui segment"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
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
              <div className="value">800</div>
            </div>
            <ProgressBar>
              <ProgressBar striped bsStyle="danger" now={20} key={1} />{" "}
              <ProgressBar bsStyle="warning" now={30} key={2} />{" "}
              <ProgressBar active bsStyle="success" now={30} key={3} />{" "}
            </ProgressBar>
            <a
              href="https://google.com"
              style={{
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <h2> Feel free to sign up to check your Credit score!</h2>
            </a>
          </div>
        </div>
        <div />
      </Segment>
    </Container>
    <Footer />
  </ResponsiveContainer>
);

export default UserCredit;
