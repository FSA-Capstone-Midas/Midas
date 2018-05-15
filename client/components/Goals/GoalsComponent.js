import React, { Component } from "react";
import { Button, Icon, Item, Label, Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteRetirementPlan } from "../../store";
import { deleteRetirementGoal } from "../../store";
import { deleteHousePlan } from "../../store";

class ItemExampleDivided extends Component {
  constructor(props) {
    super(props);
    this.preEmergencyClick = this.preEmergencyClick.bind(this);
  }
  preEmergencyClick(event) {
    event.preventDefault();
    console.log("what is props", this.props);
    this.props.handleEmergencyClick(event);
  }

  handleEmergencySubmit(event, data) {
    event.preventDefault();
    this.props.deleteEmergencyPlan(data);
    //redirect to goal home page
  }

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
            <Item.Image src="../../../../../../pictures/matthew.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header exact as={NavLink} to="/retirement/analysis">
                See your retirement planning analysis
              </Item.Header>
              <Item.Extra>
                <Label>Retirement Goal</Label>
              </Item.Extra>
              <NavLink to="/retirement">
                <Button positive floated="right">
                  Update your retirement plan
                </Button>
              </NavLink>
              <Button
                name="retirementPlan"
                negative
                floated="right"
                onClick={event => handleRetirementClick(event)}
              >
                Delete retirement plan
              </Button>
            </Item.Content>
          </Item>
        ) : null}

        {this.props.emergency.isEnter ? (
          <Item>
            <Item.Image src="../../../../../../pictures/matthew.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header>Emergency Planning Goal</Item.Header>
              <Item.Extra>
                <p>Total Expense Goal: ${this.props.emergency.totalExpense}</p>
                <Label>Emergency Planning</Label>
              </Item.Extra>
              <NavLink to="/saveForEmergency">
                <Button positive floated="right">
                  Update your emergency plan
                </Button>
              </NavLink>
              <Button
                type="submit"
                onClick={(event, data) =>
                  this.handleEmergencySubmit(event, data)
                }
              >
                Delete Emergency Plan
              </Button>
            </Item.Content>
          </Item>
        ) : null}

        {this.props.houseForm.annualIncome ? (
          <Item>
            <Item.Image src="../../../../../../pictures/matthew.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header>See your housing goal</Item.Header>
              <Item.Extra>
                <Label>Housing Goal</Label>
              </Item.Extra>
              <NavLink to="/house">
                <Button
                  type="submit"
                  name="housingPlan"
                  positive
                  floated="right"
                  onClick={handleHouseClick}
                >
                  Update your mortgage plan
                </Button>
              </NavLink>
              <Button negative floated="right" onClick={handleHouseClick}>
                Delete mortgage plan
              </Button>
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
    let { retirement, goals, emergency, houseForm } = this.props;
    return (
      <Grid.Column>
        <ItemExampleDivided
          retirement={retirement}
          houseForm={houseForm}
          emergency={emergency}
        />
      </Grid.Column>
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
    handleRetirementClick(event) {
      dispatch(
        deleteRetirementPlan({ [event.target.name]: event.target.value })
      );
    },
    deleteEmergencyPlan(data) {
      console.log("Do we get here?");
      dispatch(deleteRetirementGoal(data));
    },
    handleHouseClick(event) {
      dispatch(deleteHousePlan({ [event.target.name]: event.target.value }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsComponent);
