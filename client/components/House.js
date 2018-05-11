import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment, Form, Input, Button, Icon } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

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
                placeholder=""
              />
              <Form.Field
                control={Input}
                label="Mortgage Rate( average 30-year fixed rate is 4.04%)"
                placeholder="%"
              />
              <Form.Field
                control={Input}
                label="Percent Down Payment"
                placeholder="%"
              />
              <Form.Field
                control={Input}
                label="Annual Insurance $:"
                placeholder=""
              />
              <Form.Field
                control={Input}
                label="Annual Property Tax(national averge is 1%)"
                placeholder="%"
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

// const mapState = state => {
//   return {
//     account: state.plaid.account,
//     transaction: state.plaid.transaction
//   };
// };

// export default connect(mapState)(Home);
export default House;
