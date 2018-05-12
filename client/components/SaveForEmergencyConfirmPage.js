import React, { Component } from "react";
import { Grid, Label, Segment, List, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class SaveForEmergenyConfirmPage extends Component {
  handleSubmit() {
    //send to state
    //redirect to goal home page
  }

  render() {
    const { expenseGoal, expenseDuration } = this.props.expenseGoal;
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
              <Button type="submit">Submit</Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    // sendExpenseGoal() {dispatch()}
  };
};

export default connect(null, mapDispatch)(SaveForEmergenyConfirmPage);
