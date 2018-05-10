import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import Loading from "./Loading";
import Plaid from "./Plaid";
import AccountTable from "./AccountTable";
import { Segment, Grid, Menu } from "semantic-ui-react";
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
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    const { accounts } = this.props;
    console.log(accounts);
    return (
      <ResponsiveContainer>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Segment>
            <Grid>
              <Grid.Column width={4}>
                <Menu
                  vertical
                  style={{ fontSize: "14px", display: "table-row-group" }}
                >
                  <h3>Account info</h3>
                  {accounts &&
                    accounts.accountInfo.map(account => {
                      if (account.subtype === "checking") {
                        return (
                          <Segment
                            key={account.id}
                            style={{ fontSize: "14px", display: "flex" }}
                          >
                            <Menu.Item>
                              <Menu.Header>{account.name}</Menu.Header>
                              <Menu.Menu>
                                <Menu.Item>
                                  balances
                                  <Menu.Item
                                    name={String(account.balances.available)}
                                  />
                                </Menu.Item>
                                <Menu.Item>
                                  subtype
                                  <Menu.Item name={account.subtype} />
                                </Menu.Item>
                              </Menu.Menu>
                            </Menu.Item>
                            <img
                              style={{ width: "220px", height: "120px" }}
                              className="carousel-image"
                              src="../../../../../../pictures/visa.png"
                            />
                          </Segment>
                        );
                      } else if (account.subtype === "savings") {
                        return (
                          <Segment
                            key={account.id}
                            style={{ fontSize: "14px", display: "flex" }}
                          >
                            <Menu.Item key={account.id}>
                              <Menu.Header>{account.name}</Menu.Header>
                              <Menu.Menu>
                                <Menu.Item>
                                  balances
                                  <Menu.Item
                                    name={String(account.balances.available)}
                                  />
                                </Menu.Item>
                                <Menu.Item>
                                  subtype
                                  <Menu.Item name={account.subtype} />
                                </Menu.Item>
                              </Menu.Menu>{" "}
                            </Menu.Item>
                            <img
                              style={{ width: "220px", height: "120px" }}
                              className="carousel-image"
                              src="../../../../../../pictures/Chase.png"
                            />
                          </Segment>
                        );
                      } else if (account.subtype === "credit card") {
                        return (
                          <Segment
                            key={account.id}
                            style={{ fontSize: "14px", display: "flex" }}
                          >
                            <Menu.Item key={account.id}>
                              <Menu.Header>{account.name}</Menu.Header>
                              <Menu.Menu>
                                <Menu.Item>
                                  Balance{" "}
                                  <Menu.Item
                                    name={String(account.balances.available)}
                                  />
                                </Menu.Item>
                                <Menu.Item>
                                  Current{" "}
                                  <Menu.Item
                                    name={String(account.balances.current)}
                                  />
                                </Menu.Item>
                                <Menu.Item>
                                  Limit{" "}
                                  <Menu.Item
                                    name={String(account.balances.limit)}
                                  />
                                </Menu.Item>
                                <Menu.Item>
                                  subtype <Menu.Item name={account.subtype} />
                                </Menu.Item>
                              </Menu.Menu>
                            </Menu.Item>
                            <img
                              style={{
                                width: "220px",
                                height: "120px",
                                marginLeft: "18px"
                              }}
                              className="carousel-image"
                              src="../../../../../../pictures/credit.png"
                            />
                          </Segment>
                        );
                      }
                    })}
                </Menu>
              </Grid.Column>
              <Grid.Column width={9}>
                <AccountTable />
              </Grid.Column>
            </Grid>
          </Segment>
        )}

        <Footer />
      </ResponsiveContainer>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log(state, "stateYO~");
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
