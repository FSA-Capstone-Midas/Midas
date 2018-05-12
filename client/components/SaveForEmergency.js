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
  Step,
  Label
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
  {
    key: "expense",
    icon: "truck",
    title: "Expense",
    description: "Tell us your expense."
  },
  {
    key: "billing",
    active: true,
    icon: "payment",
    title: "Billing",
    description: "Enter billing information"
  },
  { key: "confirm", disabled: true, icon: "info", title: "Submit Goal" }
];

const StepExampleGroupShorthand = () => <Step.Group items={steps} />;

class SaveForEmergency extends Component {
  constructor(props) {
    super(props);
    this.state = { duration: 500, visible: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evevt) {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <ResponsiveContainer>
        <Container>
          <Segment>
            <Header as="h1">Save for an Emergency</Header>
            <StepExampleGroupShorthand />
            <Segment>
              <Grid>
                <Grid.Column width={8}>
                  <Header as="h1">Tell us about your expenses...</Header>
                  <Form>
                    <Form.Group widths="equal">
                      <Input
                        labelPosition="right"
                        type="text"
                        placeholder="Amount"
                      >
                        <Label basic>$</Label>
                        <input />
                        <Label>.00</Label>
                      </Input>
                    </Form.Group>
                    <Form.Field
                      id="form-button-control-public"
                      control={Button}
                      content="Confirm"
                    />
                    <Form.Input
                      label={`Duration: ${this.state.duration}ms `}
                      min={100}
                      max={2000}
                      name="duration"
                      onChange={this.handleChange}
                      step={100}
                      type="range"
                      value={this.state.duration}
                    />
                  </Form>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h1">How much will you need?</Header>
                  <Segment>
                    Based on your expense we recommend you set a goal of $2,170
                    to save the money you will need for an Emergency Fund
                  </Segment>
                </Grid.Column>
              </Grid>
            </Segment>
          </Segment>
        </Container>

        <Footer />
      </ResponsiveContainer>
    );
  }
}

export default SaveForEmergency;
