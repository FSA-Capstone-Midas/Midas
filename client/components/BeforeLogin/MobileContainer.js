import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from "semantic-ui-react";

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children, match } = this.props;
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
            <Menu.Item exact as={NavLink} to="/">
              Home
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/howitworks">
              How It Works
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/aboutus">
              About Us
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
              style={{ minHeight: 50, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    {match.path === "/login" ? null : (
                      <Button as={Link} to="/login" inverted>
                        Log in
                      </Button>
                    )}

                    {match.path === "/signup" ? null : (
                      <Button
                        as={Link}
                        to="/signup"
                        inverted
                        id="mobileSignUpbutton"
                      >
                        Sign Up
                      </Button>
                    )}
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

export default withRouter(MobileContainer);
