import PropTypes from "prop-types";
import React, { Component } from "react";
import { auth } from "../store";
import { connect } from "react-redux";

import Footer from "./Footer";
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
  Visibility
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

//const Login = () => (
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, displayName, handleSubmit, error } = this.props;

    return (
      <ResponsiveContainer>
        <Segment id="aboutUsBackground" style={{ padding: "3em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "0.5em" }}
              >
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Login
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  {/* <Image avatar src="/assets/images/avatar/large/nan.jpg" /> */}
                  <b>MIDAS</b> OUR APP MAKES MANAGING YOUR MONEY EASY.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "2em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <div id="signup-login">
                  <form className="ui form">
                    <div className="field">
                      <label>Email</label>
                      <input email="email" placeholder="Email" />
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <input name="password" placeholder="Password" />
                    </div>
                    <button
                      type="submit"
                      className="ui orange inverted button"
                      role="button"
                    >
                      Submit
                    </button>
                    <br />
                  </form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    }
  };
};

export default withRouter(connect(mapLogin, mapDispatch)(Login));

/**
 * PROP TYPES
 */
Login.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
