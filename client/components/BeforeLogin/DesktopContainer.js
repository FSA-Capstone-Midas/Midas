import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from "semantic-ui-react";

const notMobile = { minWidth: Responsive.onlyMobile.maxWidth + 1 };

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, match } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...notMobile} id="#desktopNav">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 80, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{ border: "none" }}
            >
              <Container style={{ fontSize: "17px" }}>
                {this.state.fixed ? null : (
                  <Menu.Item style={{ marginBottom: "-1em" }}>
                    <Image src="/pictures/midas_nav_logo.png" />
                  </Menu.Item>
                )}

                <Menu.Item exact as={NavLink} to="/">
                  Home
                </Menu.Item>
                <Menu.Item exact as={NavLink} to="/howitworks">
                  How It Works
                </Menu.Item>
                <Menu.Item exact as={NavLink} to="/aboutus">
                  About Us
                </Menu.Item>
                <Menu.Item position="right">
                  {match.path === "/login" ? null : (
                    <Button as={Link} to="/login" inverted={!fixed}>
                      Log in
                    </Button>
                  )}

                  {match.path === "/signup" ? null : (
                    <Button
                      as={Link}
                      to="/signup"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                  )}
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

export default withRouter(DesktopContainer);
