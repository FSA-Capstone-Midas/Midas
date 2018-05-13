import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
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
  Visibility,
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import MobileContainer from "./BeforeLogin/MobileContainer";
import DesktopContainer from "./BeforeLogin/DesktopContainer";
import { auth } from "../store";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, displayName, handleSubmit, error } = this.props;
    const startYear = 1948;
    const endYear = 2000;
    const startDay = 1;
    const endDay = 31;
    let arrayYear = [];
    let arrayDay = [];
    for (var i = startYear; i <= endYear; i++) {
      arrayYear.push(i);
    }
    for (var j = startDay; j <= endDay; j++) {
      arrayDay.push(j);
    }
    return (
      <ResponsiveContainer>
        <Segment id="aboutUsBackground" style={{ padding: "3em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "0.5em" }}
              >
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Sign Up Now
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
                  <form
                    className="ui form"
                    onSubmit={handleSubmit}
                    name={name}
                    style={{ fontSize: "15px" }}
                  >
                    <div className="field">
                      <label>First Name</label>
                      <input placeholder="First Name" name="firstName" />
                    </div>
                    <div className="field">
                      <label>Last Name</label>
                      <input placeholder="Last Name" name="lastName" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input placeholder="Email" name="email" />
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <input placeholder="Password" name="password" />
                    </div>
                    <div className="field">
                      <label>What should we call you?</label>
                      <input placeholder="What should we call you?" />
                    </div>

                    <label>
                      Date of Birth
                      <div id="dob">
                        <select name="month" default="month" id="monthddl">
                          <option value="1">January</option>
                          <option value="2">Febuary</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                        <select name="day" id="dayddl">
                          {arrayDay.map(elem => (
                            <option key={`${elem}`} value={`${elem}`}>
                              {elem}
                            </option>
                          ))}
                        </select>

                        <select name="Year" id="Year">
                          {arrayYear.map(item => (
                            <option key={`${item}`} value={`${item}`}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>
                    <br />
                    <div className="field">
                      <div className="ui checkbox">
                        <input type="checkbox" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                      </div>
                    </div>
                    <br />
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
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
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
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      dispatch(auth(email, password, formName, firstName, lastName));
    },
  };
};

export default withRouter(connect(mapSignup, mapDispatch)(SignUp));

/**
 * PROP TYPES
 */
SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
