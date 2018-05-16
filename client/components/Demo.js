import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Button, Segment, Form, Image } from "semantic-ui-react";
import { auth } from "../store";
import MobileContainer from "./BeforeLogin/MobileContainer";
import DesktopContainer from "./BeforeLogin/DesktopContainer";
import Footer from "./Footer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Demo = props => {
  const { name, handleSubmit, error } = props;
  return (
    <ResponsiveContainer>
      <Segment id="headerBackground" style={{ padding: "2em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
              <h1>Demo</h1>
              <h3>Try It!</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment
        style={{ padding: "2em 0em", fontSize: "12px", textAlign: "center" }}
        vertical
        id="mainContent"
      >
        <Grid textAlign="center" stackable verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 750 }}>
            <Header as="h2" color="orange" textAlign="center">
              <Image src="../../../../../pictures/midas_logo.png" /> Try our
              demo account
            </Header>
            <Form size="large" name={name}>
              <Segment stacked>
                <Button
                  fluid
                  size="large"
                  inverted
                  color="orange"
                  role="button"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
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
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = "login";
      const email = "cody@email.com";
      const password = "123";
      dispatch(auth(email, password, formName));
    }
  };
};

export default withRouter(connect(mapLogin, mapDispatch)(Demo));

/**
 * PROP TYPES
 */
Demo.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
