import React, { Component } from "react";
import PropTypes from "prop-types";
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
  Visibility,
  Input
} from "semantic-ui-react";
import { NavLink, withRouter, Link } from "react-router-dom";

/**
 * COMPONENT
 */
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="OVERVIEW"
          active={activeItem === "OVERVIEW"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="TRANSACTIONS"
          active={activeItem === "TRANSACTIONS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="CREDIT SCORE"
          active={activeItem === "CREDIT SCORE"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="BILLS"
          active={activeItem === "BILLS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="BUDGETS"
          active={activeItem === "BUDGETS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="TRENDS"
          active={activeItem === "TRENDS"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

MenuExampleSecondary.propTypes = {
  mobile: PropTypes.bool
};

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
                <Menu.Item as="a" active>
                  HOME
                </Menu.Item>
                <Menu.Item as="a">ADD ACCOUNTS</Menu.Item>
                <Menu.Item as="a">SETTING</Menu.Item>
                <Menu.Item as="a">PROFILE</Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    LOG OUT
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        <MenuExampleSecondary />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default withRouter(DesktopContainer);
