import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment, Form, Input, Button, Icon } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { addHouseFormdetails } from "../store";

/*eslint-disable*/
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class House extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, houseForm } = this.props;
    return (
      <ResponsiveContainer>
        <Segment
          id="howItWorksBackground"
          style={{ padding: "1.5em" }}
          vertical
        >
          <i aria-hidden="true" className="home huge icon" />
          <h4>Buy a Home</h4>
          <div className="ui divider" />
          <h5>How much can I afford?</h5>
          <br />
          <Form>
            <Form.Group>
              <Form.Field
                control={Input}
                label="Annual Income $:"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Mortgage Rate( average 30-year fixed rate is 4.04%)"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Percent Down Payment"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Annual Insurance $:"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Annual Property Tax(national averge is 1%)"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Segment>
        <Segment>
          <h5>How much will I need?</h5>
          <p>You can afford a home that costs </p>
          <p>$</p>
          <p>for a total monthly payment of</p>
          <p>$</p>
          <p>You will need a down payment of</p>
          <p>$</p>
          <br />
          <Button icon labelPosition="right">
            Next
            <Icon name="right arrow" />
          </Button>
        </Segment>

        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    houseForm: state.houseForm
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(event) {
      dispatch(
        addHouseFormdetails({ [event.target.name]: event.target.value })
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(House);
