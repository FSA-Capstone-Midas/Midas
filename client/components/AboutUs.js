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
              <Header as="h3" style={{ fontSize: "2em" }}>
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

      <Segment style={{ padding: "2em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src="../../../../../../pictures/matthew.png" />
                  </div>
                  <div className="content">
                    <div className="header">JingJing Li</div>
                    <div className="meta" />
                    <div className="description">
                      Matthew is an interior designer living in New York.
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2013</span>
                    <span>
                      <i className="facebook square" />
                      75 Friends
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <img src="../../../../../../pictures/matthew.png" />
                  </div>
                  <div className="content">
                    <div className="header">Joshua Park</div>
                    <div className="meta" />
                    <div className="description">
                      Molly is a personal assistant living in Paris.
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2011</span>
                    <span>
                      <i className="facebook square" />
                      35 Friends
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <img src="../../../../../../pictures/matthew.png" />
                  </div>
                  <div className="content">
                    <div className="header">Philip Leung</div>
                    <div className="meta" />
                    <div className="description">
                      Elyse is a copywriter working in New York.
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2014</span>
                    <span>
                      <i className="facebook square" />
                      151 Friends
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <img src="../../../../../../pictures/matthew.png" />
                  </div>
                  <div className="content">
                    <div className="header">Expressjs Lover</div>
                    <div className="meta" />
                    <div className="description">
                      Matthew is an interior designer living in New York.
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">Joined in 2013</span>
                    <span>
                      <i className="user icon" />
                      75 Friends
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
