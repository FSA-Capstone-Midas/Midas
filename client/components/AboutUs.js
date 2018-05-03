import PropTypes from "prop-types";
import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
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
  Visibility,
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

/* eslint-disable react/no-multi-comp */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 100, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item exact as={NavLink} to="/">
                  Home
                </Menu.Item>
                <Menu.Item exact as={NavLink} to="/howitworks">
                  How It Works
                </Menu.Item>
                <Menu.Item as="a">Security</Menu.Item>
                <Menu.Item as="a">Blog</Menu.Item>
                <Menu.Item as="a">Support</Menu.Item>
                <Menu.Item as={NavLink} to="/aboutus">
                  About Us
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as={NavLink}
                    to="/signup"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">How It Works</Menu.Item>
            <Menu.Item as="a">Security</Menu.Item>
            <Menu.Item as="a">Blog</Menu.Item>
            <Menu.Item as="a">Support</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as={NavLink} to="/signup">
              Sign Up
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button
                      as={NavLink}
                      to="/signup"
                      inverted
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const AboutUs = () => (
  <ResponsiveContainer>
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
export default withRouter(AboutUs);
