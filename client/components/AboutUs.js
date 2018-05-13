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
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";
import AfterDesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import AfterMobileContainer from "./AfterLogin/AfterLoginMobileContainer";

const ResponsiveContainer = ({ children, logined }) => {
  return (
    <div>
      {!logined ? (
        <div>
          <DesktopContainer>{children}</DesktopContainer>
          <MobileContainer>{children}</MobileContainer>
        </div>
      ) : (
        <div>
          <AfterDesktopContainer>{children}</AfterDesktopContainer>
          <AfterMobileContainer>{children}</AfterMobileContainer>
        </div>
      )}
    </div>
  );
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const AboutUs = props => {
  return (
    <ResponsiveContainer logined={props.isLoggedIn}>
      <Segment id="aboutUsBackground" style={{ padding: "3em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "6em" }}>
                About Us
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                {/* <Image avatar src="/assets/images/avatar/large/nan.jpg" /> */}
                <b>MIDAS</b> OUR APP MAKES MANAGING YOUR MONEY EASY.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment
        style={{ padding: "2em 0em", fontSize: "12px", textAlign: "center" }}
        vertical
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <a href="https://www.linkedin.com/in/jingjing-li-757b0711/">
                      <img src="../../../../../../pictures/JJ.png" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="header">JingJing Li</div>
                    <div className="meta" />
                    <div className="description">Software Developer</div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2018</span>
                    <span>
                      <i className="user icon" />
                      1000 connection
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <a href="https://www.linkedin.com/in/joshua-park-7044a7153/">
                      <img src="../../../../../../pictures/Joshua.png" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="header">Joshua Park</div>
                    <div className="meta" />
                    <div className="description">Software Developer</div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2018</span>
                    <span>
                      <i className="user icon" />
                      20,000 connections
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <a href="https://www.linkedin.com/in/philipleung90/">
                      <img src="../../../../../../pictures/Philip.png" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="header">Philip Leung</div>
                    <div className="meta" />
                    <div className="description">Software Developer</div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2018</span>
                    <span>
                      <i className="user icon" />
                      3,000 connections
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <a href="https://www.linkedin.com/in/whchan703//">
                      <img src="../../../../../../pictures/Casey.png" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="header">Casey Chan</div>
                    <div className="meta" />
                    <div className="description">Software Developer</div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2018</span>
                    <span>
                      <i className="user icon" />
                      2,000 connections
                    </span>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Sign Up for Midas
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                {/* <Image avatar src="/assets/images/avatar/large/nan.jpg" /> */}
                <b>MIDAS</b> Sign up and sync a bank account easily. Manage your
                money like never before
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

export default withRouter(connect(mapState)(AboutUs));
