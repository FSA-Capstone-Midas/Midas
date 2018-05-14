import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Header,
  Image,
  Form,
  Segment,
  Checkbox,
  Button,
  Message,
} from "semantic-ui-react";
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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0,
      month: 0,
      day: 0,
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e, { name, value }) {
    if (name === "year") {
      this.setState({
        year: value,
      });
    } else if (name === "month") {
      this.setState({
        month: value,
      });
    } else if (name === "day") {
      this.setState({
        day: value,
      });
    }
  }

  render() {
    const { name, handleSubmit, error } = this.props;

    const options = [
      { key: "January", text: "January", value: 1 },
      { key: "Febuary", text: "Febuary", value: 2 },
      { key: "March", text: "March", value: 3 },
      { key: "April", text: "April", value: 4 },
      { key: "May", text: "May", value: 5 },
      { key: "June", text: "June", value: 6 },
      { key: "July", text: "July", value: 7 },
      { key: "August", text: "August", value: 8 },
      { key: "September", text: "September", value: 9 },
      { key: "October", text: "October", value: 10 },
      { key: "November", text: "November", value: 11 },
      { key: "December", text: "December", value: 12 },
    ];

    const startYear = 1948;
    const endYear = 2000;
    const startDay = 1;
    const endDay = 31;
    let arrayYear = [];
    let arrayDay = [];
    for (var i = startYear; i <= endYear; i++) {
      arrayYear.push({ key: i, text: i, value: i });
    }
    for (var j = startDay; j <= endDay; j++) {
      arrayDay.push({ key: j, text: j, value: j });
    }

    console.log("this.state", this.state);

    return (
      <ResponsiveContainer>
        <Segment id="headerBackground" style={{ padding: "2em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
                <h1>Sign Up Now</h1>
                <h3>
                  <b>MIDAS</b> - We makes managing your money easy.
                </h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment
          style={{ padding: "2em 0em", fontSize: "12px", textAlign: "center" }}
          vertical
        >
          <Grid container textAlign="center" stackable verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 750 }}>
              <Header as="h2" color="orange" textAlign="center">
                <Image src="../../../../../pictures/midas_logo.png" /> Sign Up
                for a new account
              </Header>
              <Form size="large" onSubmit={handleSubmit} name={name}>
                <Segment stacked>
                  <Form.Input
                    label="First Name"
                    required
                    placeholder="First Name"
                    name="firstName"
                  />
                  <Form.Input
                    label="Last Name"
                    required
                    placeholder="Last Name"
                    name="lastName"
                  />
                  <Form.Input
                    label="Email"
                    required
                    placeholder="Email"
                    name="email"
                  />
                  <Form.Input
                    label="Password"
                    required
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                  <Form.Input
                    label="What should we call you?"
                    required
                    name="nickName"
                    placeholder="What should we call you?"
                  />
                  <label />
                  <Form.Group widths="equal" id="signUpSelect">
                    <Form.Select
                      required
                      name="month"
                      default="month"
                      id="monthddl"
                      options={options}
                      placeholder="Month"
                      onChange={this.handleSelectChange}
                    />
                    <Form.Select
                      label="Date of Birth"
                      required
                      name="day"
                      id="dayddl"
                      options={arrayDay}
                      placeholder="Day"
                      onChange={this.handleSelectChange}
                    />
                    <label />
                    <Form.Select
                      name="year"
                      id="Year"
                      options={arrayYear}
                      placeholder="Year"
                      onChange={this.handleSelectChange}
                    />
                  </Form.Group>
                  <Form.Input
                    style={{ display: "none" }}
                    name="month"
                    value={this.state.month}
                  />
                  <Form.Input
                    style={{ display: "none" }}
                    name="day"
                    value={this.state.day}
                  />
                  <Form.Input
                    style={{ display: "none" }}
                    name="year"
                    value={this.state.year}
                  />

                  <Form.Field>
                    <Checkbox
                      required
                      label="I agree to the Terms and Conditions"
                    />
                  </Form.Field>
                  <br />
                  <Button inverted type="submit" color="orange">
                    Sign Up
                  </Button>
                </Segment>
              </Form>
              {error ? <Message>Email already exists</Message> : null}
            </Grid.Column>
          </Grid>
        </Segment>

        <Footer />
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

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      console.log("what is evt.target.year.value", evt.target.year.value);
      console.log("what is evt.target.day.value", evt.target.day.value);
      console.log("what is evt.target.month.value", evt.target.month.value);
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const nickName = evt.target.nickName.value;
      const year = evt.target.year.value;
      const month = evt.target.month.value;
      const day = evt.target.day.value;
      dispatch(
        auth(
          email,
          password,
          formName,
          firstName,
          lastName,
          nickName,
          year,
          month,
          day
        )
      );
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
