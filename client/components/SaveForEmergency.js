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
  Label,
  Statistic
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
    this.state = { duration: 5, visible: true, amount: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(evevt) {
    event.preventDefault();
  }

  handleInputChange(event, data) {
    this.setState({ amount: +data.value });
  }

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
                        onChange={this.handleInputChange}
                        labelPosition="right"
                        type="number"
                        placeholder="Amount"
                      >
                        <Label basic>$</Label>
                        <input />
                        <Label>.00</Label>
                      </Input>
                    </Form.Group>
                    <Form.Input
                      label={`Duration: ${this.state.duration} months `}
                      min={1}
                      max={36}
                      name="duration"
                      onChange={this.handleChange}
                      step={1}
                      type="range"
                      value={this.state.duration}
                    />
                    <Form.Field
                      id="form-button-control-public"
                      control={Button}
                      content="Confirm"
                    />
                  </Form>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h1">How much will you need?</Header>
                  <Segment>
                    Based on your expense we recommend you set a goal of
                    <Statistic color="pink">
                      <Statistic.Value>
                        ${+this.state.amount * +this.state.duration}
                      </Statistic.Value>
                    </Statistic>
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
