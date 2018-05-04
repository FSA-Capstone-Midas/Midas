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
              HOME
            </Menu.Item>
            <Menu.Item as="a">ADD ACCOUNTS</Menu.Item>
            <Menu.Item as="a">PROFILE</Menu.Item>
            <Menu.Item as="a">SETTING</Menu.Item>
            <Menu.Item as="a">LOG OUT</Menu.Item>
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
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      LOG OUT
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <MenuExampleSecondary mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const UserHome = () => (
  <ResponsiveContainer>
    <Segment>
      <h1>Pie chart (RIght)</h1>
    </Segment>
    <Segment>
      <h1>Account info (LEFT)</h1>
      <Segment>
        <h1>Cash</h1>
      </Segment>
      <Segment>
        <h1>Credit Cards</h1>
      </Segment>
      <Segment>
        <h1>Loans</h1>
      </Segment>
      <Segment>
        <h1>Investments</h1>
      </Segment>
      <Segment>
        <h1>Propertys</h1>
      </Segment>
    </Segment>
    <Segment>
      <h1>Suggested offers</h1>
    </Segment>
    <Segment>
      <h1>Spending</h1>
    </Segment>
  </ResponsiveContainer>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
