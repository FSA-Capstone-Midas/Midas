import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import AccountTable from "./AccountTable";
import { Segment, Grid, Menu, Container } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { accounts } = this.props;
    return (
      <ResponsiveContainer>
        <Container>
          {this.state.loading ? (
            <Loading />
          ) : (
            <Segment>
              <Grid>
                <Grid.Column width={4}>
                  <Menu
                    vertical
                    style={{
                      fontSize: "14px",
                      display: "table-row-group"
                    }}
                  >
                    <h2>Account info</h2>
                    {accounts &&
                      accounts.accountInfo.map(account => {
                        if (account.subtype === "checking") {
                          return (
                            <Segment
                              key={account.id}
                              style={{ fontSize: "14px" }}
                            >
                              <Menu.Item>
                                <Menu.Header>{account.name}</Menu.Header>
                                <Menu.Menu>
                                  <Menu.Item>
                                    balances:
                                    <Menu.Item>{`$${
                                      account.balances.available
                                    }`}</Menu.Item>
                                  </Menu.Item>
                                  <Menu.Item>
                                    subtype:
                                    <Menu.Item name={account.subtype} />
                                  </Menu.Item>
                                </Menu.Menu>
                              </Menu.Item>
                            </Segment>
                          );
                        } else if (account.subtype === "savings") {
                          return (
                            <Segment
                              key={account.id}
                              style={{ fontSize: "14px" }}
                            >
                              <Menu.Item key={account.id}>
                                <Menu.Header>{account.name}</Menu.Header>
                                <Menu.Menu>
                                  <Menu.Item>
                                    balances:
                                    <Menu.Item>{`$${
                                      account.balances.available
                                    }`}</Menu.Item>
                                  </Menu.Item>
                                  <Menu.Item>
                                    subtype:
                                    <Menu.Item name={account.subtype} />
                                  </Menu.Item>
                                </Menu.Menu>
                              </Menu.Item>
                            </Segment>
                          );
                        } else if (account.subtype === "credit card") {
                          return (
                            <Segment
                              key={account.id}
                              style={{ fontSize: "14px" }}
                            >
                              <Menu.Item key={account.id}>
                                <Menu.Header>{account.name}</Menu.Header>
                                <Menu.Menu>
                                  <Menu.Item>
                                    Balance:
                                    <Menu.Item>{`$${
                                      account.balances.available
                                    }`}</Menu.Item>
                                  </Menu.Item>
                                  <Menu.Item>
                                    Current:
                                    <Menu.Item>{`$${
                                      account.balances.current
                                    }`}</Menu.Item>
                                  </Menu.Item>
                                  <Menu.Item>
                                    Limit:
                                    <Menu.Item>{`$${
                                      account.balances.limit
                                    }`}</Menu.Item>
                                  </Menu.Item>
                                  <Menu.Item>
                                    subtype:
                                    <Menu.Item name={account.subtype} />
                                  </Menu.Item>
                                </Menu.Menu>
                              </Menu.Item>
                            </Segment>
                          );
                        }
                      })}
                  </Menu>
                </Grid.Column>
                <Grid.Column width={11}>
                  <AccountTable />
                </Grid.Column>
              </Grid>
            </Segment>
          )}
        </Container>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    accounts: state.accounts
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     handleClick(product, evt) {
//       evt.preventDefault();
//       dispatch(postToCart(product));
//     }
//   };
// }

export default connect(mapState)(UserHome);
