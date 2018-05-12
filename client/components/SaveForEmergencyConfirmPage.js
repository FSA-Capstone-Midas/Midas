import React, { Component } from "react";
import { Grid, Label, Segment, List, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postEmergencyGoal } from "../store";

class SaveForEmergenyConfirmPage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event, data, id) {
    event.preventDefault();
    console.log(id);
    this.props.sendExpenseGoal(id, data);
    //redirect to goal home page
  }

  render() {
    const { expenseGoal, expenseDuration } = this.props.expenseGoalData;
    return (
      <Grid>
        <Grid.Column>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Overview
            </Label>
            <span>Expense Goal Details</span>
            <Segment inverted>
              <List divided inverted relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header>Expense</List.Header>
                    ${expenseGoal}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Duration</List.Header>
                    {expenseDuration} months
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Total Expense to save</List.Header>
                    ${expenseDuration * expenseGoal}
                  </List.Content>
                </List.Item>
              </List>
              <Button
                type="submit"
                onClick={event =>
                  this.handleSubmit(
                    event,
                    this.props.expenseGoalData,
                    this.props.user.id
                  )
                }
              >
                Submit
              </Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    sendExpenseGoal(id, expenseData) {
      dispatch(postEmergencyGoal(id, expenseData));
    }
  };
};

export default connect(mapState, mapDispatch)(SaveForEmergenyConfirmPage);
