import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Button, Segment, Form, Image } from "semantic-ui-react";
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
      <Segment id="headerBackground" style={{ padding: "2em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
              <h1>Login</h1>
              <h3>Welcome back!</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment
        style={{ padding: "2em 0em", fontSize: "12px", textAlign: "center" }}
        vertical
      >
        <Grid textAlign="center" stackable verticalAlign="middle">
          {/* <Grid.Row> */}
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="orange" textAlign="center">
              <Image src="../../../../../pictures/midas_logo.png" /> Log-in to
              your account
            </Header>
            <Form size="large" name={name} onSubmit={handleSubmit}>
              <Segment stacked>
                <label>Email</label>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="email"
                  placeholder="Email"
                />

                <label>Password</label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                />

                <Button
                  fluid
                  size="large"
                  inverted
                  color="orange"
                  role="button"
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
          {/* </Grid.Row> */}
        </Grid>
      </Segment>

      <Footer />
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
