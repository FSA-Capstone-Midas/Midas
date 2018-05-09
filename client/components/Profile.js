import PropTypes from "prop-types";
import React, { Component } from "react";
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
  Visibility,
  Form,
  Input,
  TextArea,
  Checkbox,
  Radio,
  Select
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

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
  render() {
    return (
      <ResponsiveContainer>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>
            Update your profile to get your financial advice optimized!
          </Header.Content>
        </Header>
        <Form id="profile">
          <Form.Group
            widths="equal"
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Field>
              <label>First name</label>
              <Input fluid placeholder="First name" />
            </Form.Field>
            <Form.Field>
              <label>Last name</label>
              <Input fluid placeholder="Middle name" />
            </Form.Field>
            <Form.Field>
              <label>D.O.B</label>
              <Input fluid placeholder="Last name" />
            </Form.Field>
          </Form.Group>
          <Form.Group
            unstackable
            widths={2}
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Input label="Email" placeholder="Email" />
            <Form.Input label="Password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            widths={2}
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Input label="Address" placeholder="Address" />
            <Form.Input label="nickName" placeholder="nickName" />
          </Form.Group>
          <Form.Group
            widths={2}
            style={{ marginBottom: "3em", marginTop: "3em" }}
          >
            <Form.Input label="Job Title" placeholder="Job Title" />
            <Form.Input label="Income Range" placeholder="Income Range" />
          </Form.Group>
          <Form.Group inline style={{ marginBottom: "3em", marginTop: "3em" }}>
            <Form.Field>
              <label>Phone Number</label>
              <Input placeholder="(xxx)" />
            </Form.Field>
            <Form.Field>
              <Input placeholder="xxx" />
            </Form.Field>
            <Form.Field>
              <Input placeholder="xxxx" />
            </Form.Field>
          </Form.Group>
          <Button positive>Update Profile</Button>
        </Form>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

/**
 * CONTAINER
 //  */
// const mapState = state => {
//   console.log(state, "stateYO~");
//   return {
//     email: state.user.email,
//     accounts: state.accounts
//   };
// };
// function mapDispatchToProps(dispatch) {
//   return {
//     handleClick(product, evt) {
//       evt.preventDefault();
//       dispatch(postToCart(product));
//     }
//   };
// }
export default connect()(Profile);
