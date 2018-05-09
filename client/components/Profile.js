import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import store, { updateProfile } from "../store";
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
  Form,
  Input,
  TextArea,
  Checkbox,
  Radio,
  Select
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

/* eslint-disable react/no-multi-comp */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      nickName: "",
      phoneNumber: 0,
      address: "",
      jobTitle: "",
      incomeRange: 0,
      birthday: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.props;
    store.dispatch(updateProfile(id, this.state));
  }
  render() {
    return (
      <ResponsiveContainer>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>
            Update your profile to get your financial advice optimized!
          </Header.Content>
        </Header>
        <Form id="profile" onSubmit={this.handleSubmit}>
          <Form.Group
            widths="equal"
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Field>
              <label>First name</label>
              <Input
                fluid
                placeholder="First name"
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Last name</label>
              <Input
                fluid
                placeholder="Last Name"
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>D.O.B</label>
              <Input
                value={this.state.birthday}
                name="birthday"
                onChange={this.handleChange}
                fluid
                placeholder="birthDay"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group
            unstackable
            widths={2}
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Input
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
              label="Email"
              placeholder="Email"
            />
            <Form.Input
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              label="Password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            widths={2}
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Input
              value={this.state.address}
              name="address"
              onChange={this.handleChange}
              label="Address"
              placeholder="Address"
            />
            <Form.Input
              value={this.state.nickName}
              name="nickName"
              onChange={this.handleChange}
              label="nickName"
              placeholder="nickName"
            />
          </Form.Group>
          <Form.Group
            widths={2}
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Input
              value={this.state.jobTitle}
              name="jobTitle"
              onChange={this.handleChange}
              label="Job Title"
              placeholder="Job Title"
            />
            <Form.Input
              value={this.state.incomeRange}
              name="incomeRange"
              onChange={this.handleChange}
              label="Income Range"
              placeholder="Income Range"
            />
          </Form.Group>
          <Form.Group inline style={{ marginBottom: "3em", marginTop: "3em" }}>
            <Form.Field>
              <label>Phone Number</label>
              <Input
                name="phoneNumber"
                onChange={this.handleChange}
                placeholder="(xxx)-(xxx)-(xxxx)"
              />
            </Form.Field>
          </Form.Group>
          <Button positive type="submit">
            Update Profile
          </Button>
        </Form>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  return {
    id: state.user.id
  };
};

export default connect(mapState)(Profile);
