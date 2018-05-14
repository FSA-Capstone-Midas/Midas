import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from "semantic-ui-react";
import { logout } from "../../store";

const notMobile = { minWidth: Responsive.onlyMobile.maxWidth + 1 };

class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary style={{ fontSize: "15px", marginLeft: "12%" }}>
        <Menu.Item
          name="OVERVIEW"
          active={activeItem === "OVERVIEW"}
          onClick={this.handleItemClick}
          exact
          as={NavLink}
          to="/home"
        />
        <Menu.Item
          name="TRANSACTIONS"
          active={activeItem === "TRANSACTIONS"}
          onClick={this.handleItemClick}
          exact
          as={NavLink}
          to="/transactions"
        />
        <Menu.Item
          name="CREDIT SCORE"
          active={activeItem === "CREDIT SCORE"}
          onClick={this.handleItemClick}
          exact
          as={NavLink}
          to="/credit"
        />
        <Menu.Item
          name="BILLS"
          active={activeItem === "BILLS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="BUDGETS"
          as={NavLink}
          to="/budget"
          active={activeItem === "BUDGETS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="TRENDS"
          as={NavLink}
          to="/trend"
          active={activeItem === "TRENDS"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="GOALS"
          as={NavLink}
          to="/goals"
          active={activeItem === "GOALS"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

MenuExampleSecondary.propTypes = {
  mobile: PropTypes.bool,
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
    const { children, handleClick } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...notMobile}>
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
                <Menu.Item as={NavLink} to="/home">
                  Home
                </Menu.Item>
                <Menu.Item>Add Accounts</Menu.Item>
                <Menu.Item exact as={NavLink} to="/howitworks">
                  How It Works
                </Menu.Item>
                <Menu.Item exact as={NavLink} to="/aboutus">
                  About Us
                </Menu.Item>
                <Menu.Item exact as={NavLink} to="/profile">
                  Profile
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    onClick={handleClick}
                  >
                    Log Out
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
  children: PropTypes.node,
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default withRouter(connect(null, mapDispatch)(DesktopContainer));

// export default withRouter(DesktopContainer);
