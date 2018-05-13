import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Segment } from "semantic-ui-react";
import { auth } from "../../store";
import MobileContainer from "../BeforeLogin/MobileContainer";
import DesktopContainer from "../BeforeLogin/DesktopContainer";
import Footer from "../Footer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const Login = props => {
  const { name, handleSubmit } = props;
  return (
    <ResponsiveContainer>
      <Segment id="headerBackground" style={{ padding: "3em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column
              style={{ paddingBottom: "0.5em", paddingTop: "0.5em" }}
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Login
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <b>MIDAS</b> OUR APP MAKES MANAGING YOUR MONEY EASY.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "2em 0em", height: "100vh" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <div id="signup-login">
                <form
                  className="ui form"
                  name={name}
                  onSubmit={handleSubmit}
                  style={{ fontSize: "15px" }}
                >
                  <div className="field">
                    <label>Email</label>
                    <input name="email" placeholder="Email" />
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
      <div
        style={{
          position: "fixed",
          left: "0px",
          bottom: "0px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Footer />
      </div>
    </ResponsiveContainer>
  );
};

const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
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
    },
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
  error: PropTypes.object,
};
