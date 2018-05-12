import React, { Component } from "react";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class ItemExampleDivided extends Component {
  render() {
    return (
      <Item.Group divided>
        {this.props.retirement.birthyear ? (
          <Item>
            <Item.Image src="../../../../../../pictures/matthew.png" />

            <Item.Content>
              <Item.Header exact as={NavLink} to="/retirement/analysis">
                See your retirement planning analysis
              </Item.Header>
              <Item.Extra>
                <Label>Retirement</Label>
              </Item.Extra>
              <NavLink to="/retirement">
                <Button>Update your retirement plan</Button>
              </NavLink>
            </Item.Content>
          </Item>
        ) : null}
        {this.props.emergency.isEnter ? (
          <Item>
            <Item.Image src="../../../../../../pictures/matthew.png" />

            <Item.Content>
              <Item.Header>Emergency Planning Goal</Item.Header>
              <Item.Extra>
                <p>Total Expense Goal: ${this.props.emergency.totalExpense}</p>
                <Label>Emergency Planning</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        ) : null}
      </Item.Group>
    );
  }
}

//render box
class GoalsComponent extends Component {
  render() {
    let { retirement, goals, emergency } = this.props;
    return (
      <Segment>
        <h1>Goals: </h1>
        <ItemExampleDivided retirement={retirement} emergency={emergency} />
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
    retirement: state.retirement,
    emergency: state.emergencyGoalReducer
  };
};

export default connect(mapStateToProps)(GoalsComponent);
