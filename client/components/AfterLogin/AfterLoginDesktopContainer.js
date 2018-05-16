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
  Image,
} from "semantic-ui-react";
import { logout, fetchUser } from "../../store";

const notMobile = { minWidth: Responsive.onlyMobile.maxWidth + 1 };

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
      <Responsive {...notMobile} id="desktopNav">
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
              <Container
                style={{
                  fontSize: "17px",
                }}
              >
                {this.state.fixed ? null : (
                  <Menu.Item style={{ marginBottom: "-1em" }}>
                    <Image src="/pictures/midas_nav_logo.png" />
                  </Menu.Item>
                )}
                <Menu.Item as={NavLink} to="/home">
                  Home
                </Menu.Item>
                <Menu.Item>Add Accounts</Menu.Item>
                <Menu.Item exact as={NavLink} to="/profile">
                  Profile
                </Menu.Item>

                <Menu.Item exact as={NavLink} to="/transactions">
                  Transactions
                </Menu.Item>

                <Menu.Item exact as={NavLink} to="/credit">
                  Credit Score
                </Menu.Item>

                <Menu.Item exact as={NavLink} to="/bills">
                  Bills
                </Menu.Item>

                <Menu.Item exact as={NavLink} to="/budget">
                  Budgets
                </Menu.Item>

                <Menu.Item exact as={NavLink} to="/trend">
                  Trends
                </Menu.Item>

                <Menu.Item exact as={NavLink} to="/goals">
                  Goals
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
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};
const mapState = state => {
  return {
    user: state.user,
    id: state.user.id,
  };
};
const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
    handleUser(event, id) {
      event.preventDefault();
      dispatch(fetchUser(id));
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(DesktopContainer));

// export default withRouter(DesktopContainer);
