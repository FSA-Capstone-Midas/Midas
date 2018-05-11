import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Segment,
  Form,
  Input,
  Button,
  Container,
  Header,
  Grid,
  Step
} from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
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

const steps = [
  { key: 'expense', icon: 'truck', title: 'Expense', description: 'Tell us your expense.' },
  { key: 'billing', active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information' },
  { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' },
]

const StepExampleGroupShorthand = () => (
  <Step.Group items={steps} />
)

class SaveForEmergency extends Component {
  constructor(props) {
    super(props);
    this.state = { goal: 0 };
  }

  handleSubmit(evevt) {}

  render() {
    return (
      <ResponsiveContainer>
        <Container>
          <Header as="h1">Save for an Emergency</Header>
          <StepExampleGroupShorthand/>
          <Segment>
          <Grid>
            <Grid.Column width={8}>
          <Header as="h1">Tell us about your expenses...</Header>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Enter your average monthly spending"
                    placeholder="$1000"
                  />
                </Form.Group>
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Confirm"
                />
              </Form>
            </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h1">How much will you need?</Header>
            <Segment>Based on your expense we recommend you set a goal of $2,170 to save the money you will need for an Emergency Fund</Segment>
          </Grid.Column>
          </Grid>
          </Segment>
        </Container>

        <Footer />
      </ResponsiveContainer>
    );
  }
}

export default SaveForEmergency;
