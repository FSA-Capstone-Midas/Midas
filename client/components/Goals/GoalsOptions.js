import React, { Component } from "react";
import { Button, Icon, Item, Label, Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteRetirementPlan,
  deleteEmergencyPlan,
  deleteHousePlan,
} from "../../store";

class GoalsOptions extends Component {
  render() {
    const {
      handleRetirementClick,
      handleEmergencyClick,
      handleHouseClick,
    } = this.props;
    return (
      <Item.Group divided>
        {this.props.retirement.birthyear ? (
          <Item>
            <Item.Image src="pictures/retirement.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header exact as={NavLink} to="/retirement/analysis">
                See your retirement planning analysis
              </Item.Header>
              <Item.Extra>
                <Label>Retirement Goal</Label>
              </Item.Extra>
              <NavLink to="/retirement">
                <Button color="teal" floated="right">
                  Update your retirement plan
                </Button>
              </NavLink>
              <Button
                name="retirementPlan"
                color="orange"
                floated="right"
                onClick={event =>
                  handleRetirementClick(event, this.props.user.id)
                }
              >
                Delete retirement plan
              </Button>
            </Item.Content>
          </Item>
        ) : null}

        {this.props.emergency.isEnter ? (
          <Item>
            <Item.Image src="pictures/emergency.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header>Emergency Planning Goal</Item.Header>
              <Item.Extra>
                <p>Total Expense Goal: ${this.props.emergency.totalExpense}</p>
                <Label>Emergency Planning</Label>
              </Item.Extra>
              <NavLink to="/saveForEmergency">
                <Button color="teal" floated="right">
                  Update your emergency plan
                </Button>
              </NavLink>
              <Button
                name="retirementPlan"
                color="orange"
                floated="right"
                onClick={event =>
                  handleEmergencyClick(event, this.props.user.id)
                }
              >
                Delete Emergency Plan
              </Button>
            </Item.Content>
          </Item>
        ) : null}

        {this.props.houseForm.annualIncome ? (
          <Item>
            <Item.Image src="pictures/house.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header>See your housing goal</Item.Header>
              <Item.Extra>
                <Label>Housing Goal</Label>
              </Item.Extra>
              <NavLink to="/house">
                <Button color="teal" floated="right">
                  Update your mortgage plan
                </Button>
              </NavLink>
              <Button
                name="housingPlan"
                color="orange"
                floated="right"
                onClick={event => handleHouseClick(event, this.props.user.id)}
              >
                Delete mortgage plan
              </Button>
            </Item.Content>
          </Item>
        ) : null}
      </Item.Group>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
    retirement: state.retirement,
    emergency: state.emergencyGoalReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRetirementClick(event, id) {
      dispatch(deleteRetirementPlan(id));
    },
    handleEmergencyClick(event, id) {
      dispatch(deleteEmergencyPlan(id));
    },
    handleHouseClick(event, id) {
      console.log("what is id", id);
      dispatch(deleteHousePlan(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsOptions);
