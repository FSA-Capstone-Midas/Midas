import React, { Component } from "react";
import { connect } from "react-redux";
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

const steps = [
  {
    key: "goal",
    icon: "truck",
    title: "Goal",
    description: "Tell us your goal."
  },
  {
    key: "expense",
    active: true,
    icon: "payment",
    title: "Expense",
    description: "Enter your expenses."
  },
  { key: "confirm", disabled: true, icon: "info", title: "Submit Goal" }
];

const StepExampleGroupShorthand = () => <Step.Group items={steps} />;

class SaveForEmergency extends Component {
  constructor(props) {
    super(props);
    this.state = { duration: 5, visible: true, amount: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.handlePage(this.state.duration, this.state.amount, {
      enteredExpense: true
    });
  }

  handleInputChange(event, data) {
    this.setState({ amount: +data.value });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Container>
        <Segment>
          <Header as="h1">Save for an Emergency</Header>
          <StepExampleGroupShorthand />
          <Segment>
            <Grid>
              <Grid.Column width={8}>
                <Header as="h1">Tell us about your expenses...</Header>
                <Form onSubmit={this.handleFormSubmit}>
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
                  <Button type="submit">Submit</Button>
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
    );
  }
}

const mapState = state => {
  return {};
};

export default connect(mapState)(SaveForEmergency);
