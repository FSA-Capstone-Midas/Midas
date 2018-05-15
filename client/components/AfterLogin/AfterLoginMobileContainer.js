import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { logout } from "../../store";

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children, handleClick } = this.props;
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
            <Menu.Item exact as={NavLink} to="/" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Add Accounts</Menu.Item>
            <Menu.Item exact as={NavLink} to="/overview">
              Overview
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/transactions">
              Transactions
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/credit">
              Credit
            </Menu.Item>
            <Menu.Item as="a">Bills</Menu.Item>
            <Menu.Item exact as={NavLink} to="/budget">
              Budget
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/trend">
              Trends
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/goals">
              Goals
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/profile">
              Profile
            </Menu.Item>
            <Menu.Item exact as={NavLink} to="/howitworks">
              How It Works
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
                    <Button
                      as="a"
                      inverted
                      style={{ marginLeft: "0.5em" }}
                      onClick={handleClick}
                    >
                      Log Out
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

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default withRouter(connect(null, mapDispatch)(MobileContainer));
