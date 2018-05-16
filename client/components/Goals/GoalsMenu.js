import React, { Component } from "react";
import {
  Grid,
  Segment,
  Card,
  Sticky,
  Header,
  Button,
  Container,
  Image,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

//render menu
class GoalsMenu extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(event) {}

  render() {
    let { retirement, emergencyGoal, houseForm } = this.props;

    return (
      <Container>
        <Grid style={{ paddingTop: "1em" }} stackable>
          <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle">
              <div>
                <Header as="h5">
                  Whether you want to get out of debt, buy a home, or save for
                  retirement, $ helps you reach your financial goals.
                </Header>
                <p>
                  1. To get started, choose a goal from our list or create your
                  own.
                </p>
                <p>
                  2. Use our calculator to determine how much you need to save.
                </p>
                <p>
                  3. Set a goal with either an end date or monthly amount in
                  mind.
                </p>
                <p>
                  4. Link your goal to an account so it's easy to stick to your
                  plan.
                </p>
              </div>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign="middle">
              <div>
                <NavLink to="/retirement">
                  {retirement.birthyear ? (
                    <Button disabled onClick={this.handleClick}>
                      <Image src="pictures/retirement.png" />
                    </Button>
                  ) : (
                    <Button onClick={this.handleClick}>
                      <Image src="pictures/retirement.png" />
                    </Button>
                  )}
                </NavLink>
                <label>Save for Retirement</label>
              </div>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign="middle">
              <div>
                <NavLink to="/goals/saveForEmergency">
                  {emergencyGoal.isEnter ? (
                    <Button disabled onClick={this.handleClick}>
                      <Image src="pictures/emergency.png" />
                    </Button>
                  ) : (
                    <Button onClick={this.handleClick}>
                      <Image src="pictures/emergency.png" />
                    </Button>
                  )}
                </NavLink>
                <label>Save for an Emergency</label>
              </div>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign="middle">
              <div>
                <NavLink to="/house">
                  {houseForm.annualIncome ? (
                    <Button disabled onClick={this.handleClick}>
                      <Image src="pictures/house.png" />
                    </Button>
                  ) : (
                    <Button onClick={this.handleClick}>
                      <Image src="pictures/house.png" />
                    </Button>
                  )}
                </NavLink>
                <label>Save for Dream House</label>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
    retirement: state.retirement,
    emergencyGoal: state.emergencyGoalReducer,
    houseForm: state.houseForm,
  };
};

export default connect(mapStateToProps)(GoalsMenu);
