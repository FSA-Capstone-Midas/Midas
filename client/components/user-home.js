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
        <Segment id="headerBackground" style={{ padding: "0.1em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.1em", paddingTop: "0.1em" }}
              >
                <h3>DashBoard</h3>
                <h4>Latest statistics & summary </h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Container>
          {this.state.loading ? (
            <Loading />
          ) : (
            <div>
              <Grid>
                <Grid.Column width={10}>
                  <Menu
                    vertical
                    style={{
                      fontSize: "14px",
                      display: "table-row-group"
                    }}
                  >
                    <h4>Account Summary</h4>
                    <Grid.Column width={11}>
                      <AccountTable />
                    </Grid.Column>
                  </Menu>
                </Grid.Column>
              </Grid>
            </div>
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
