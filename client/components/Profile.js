import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import store, { updateProfile } from "../store";
import { Button, Grid, Header, Image, Segment, Form } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

/* eslint-disable react/no-multi-comp */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const options = [
  { key: "January", text: "January", value: "January" },
  { key: "Febuary", text: "Febuary", value: "Febuary" },
  { key: "March", text: "March", value: "March" },
  { key: "April", text: "April", value: "April" },
  { key: "May", text: "May", value: "May" },
  { key: "June", text: "June", value: "June" },
  { key: "July", text: "July", value: "July" },
  { key: "August", text: "August", value: "August" },
  { key: "September", text: "September", value: "September" },
  { key: "October", text: "October", value: "October" },
  { key: "November", text: "November", value: "November" },
  { key: "December", text: "December", value: "December" },
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      nickName: props.user.nickName,
      birthYear: props.user.birthYear,
      birthMonth: props.user.birthMonth,
      birthDay: props.user.birthDay,
      phoneNumber: props.user.phoneNumber,
      jobTitle: props.user.jobTitle,
      incomeRange: props.user.incomeRange,
      email: props.user.email,
      state: props.user.state,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.props;
    store.dispatch(updateProfile(id, this.state));
  }

  handleSelectChange(e, { name, value }) {
    if (name === "birthYear") {
      this.setState({
        birthYear: value,
      });
    } else if (name === "birthMonth") {
      this.setState({
        birthMonth: value,
      });
    } else if (name === "birthDay") {
      this.setState({
        birthDay: value,
      });
    }
  }

  render() {
    const { user } = this.props;
    console.log("what is user", user.birthYear);
    console.log("what is user", user.birthMonth);
    console.log("what is user", user.birthDay);
    return (
      <ResponsiveContainer>
        <Segment id="headerBackground" style={{ padding: "2em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
                <h1>Update your profile</h1>
                <h3>Get your financial advice optimized!</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment
          style={{ padding: "2em 0em", fontSize: "12px", textAlign: "center" }}
          vertical
          id="mainContent"
        >
          <Grid container textAlign="center" stackable verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 750 }}>
              <Header as="h2" color="orange" textAlign="center">
                <Image src="../../../../../pictures/midas_logo.png" /> Update
                your profile now!
              </Header>

              <Form
                size="large"
                id="profile"
                onSubmit={this.handleSubmit}
                style={{ fontSize: "13px" }}
              >
                <Segment stacked>
                  <Form.Input
                    label="First Name"
                    required
                    placeholder={user.firstName}
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleChange}
                  />

                  <Form.Input
                    label="Last Name"
                    required
                    placeholder={user.lastName}
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleChange}
                  />

                  <Form.Input
                    value={this.state.email}
                    required
                    name="email"
                    onChange={this.handleChange}
                    label="Email"
                    placeholder={user.email}
                  />

                  <Form.Input
                    value={this.state.nickName}
                    name="nickName"
                    onChange={this.handleChange}
                    label="NickName"
                    placeholder={user.nickName}
                  />

                  <Form.Input
                    value={this.state.state}
                    name="state"
                    onChange={this.handleChange}
                    label="State"
                    placeholder={user.state}
                  />

                  <Form.Group widths="equal" id="signUpSelect">
                    <Form.Select
                      required
                      name="birthMonth"
                      default="month"
                      id="monthddl"
                      options={options}
                      placeholder={user.birthMonth.toString()}
                      onChange={this.handleSelectChange}
                    />
                    <Form.Select
                      label="Date of Birth"
                      required
                      name="birthDay"
                      id="dayddl"
                      options={arrayDay}
                      placeholder={user.birthDay.toString()}
                      onChange={this.handleSelectChange}
                    />
                    <label />
                    <Form.Select
                      name="birthYear"
                      id="Year"
                      options={arrayYear}
                      placeholder={user.birthYear.toString()}
                      onChange={this.handleSelectChange}
                    />
                  </Form.Group>

                  <Form.Input
                    value={this.state.jobTitle}
                    name="jobTitle"
                    onChange={this.handleChange}
                    label="Job Title"
                    placeholder={user.jobTitle}
                  />
                  <Form.Input
                    value={this.state.incomeRange}
                    name="incomeRange"
                    onChange={this.handleChange}
                    label="Income Range"
                    placeholder={user.incomeRange}
                  />

                  <Form.Input
                    value={this.state.phoneNumber}
                    label="Phone Number"
                    name="phoneNumber"
                    onChange={this.handleChange}
                    placeholder="(xxx)-(xxx)-(xxxx)"
                  />

                  <Button positive type="submit">
                    Update Profile
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    id: state.user.id,
  };
};

export default connect(mapState)(Profile);
