import React, { Component } from "react";
import { Grid, Segment, Card, Sticky, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

//render menu
class GoalsMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {}

  render() {
    let { retirement, emergencyGoal, houseForm } = this.props;

    return (
      <Segment>
        <Grid>
          <Grid.Column width={12}>
            <Grid>
              <Grid.Row columns={4}>
                {retirement.birthyear ? null : (
                  <Grid.Column>
                    <Card
                      header="Save for Retirement"
                      onClick={this.handleClick}
                      image={"../../../../../../pictures/matthew.png"}
                      as={NavLink}
                      to="/retirement"
                    />
                  </Grid.Column>
                )}
                {emergencyGoal.isEnter ? null : (
                  <Grid.Column>
                    <Card
                      header="Save for an Emergency"
                      onClick={this.handleClick}
                      image={"../../../../../../pictures/matthew.png"}
                      as={NavLink}
                      to="/goals/saveForEmergency"
                    />
                  </Grid.Column>
                )}
                {houseForm.annualIncome ? null : (
                  <Grid.Column>
                    <Card
                      header="Buy a house"
                      onClick={this.handleClick}
                      image={"../../../../../../pictures/matthew.png"}
                      as={NavLink}
                      to="/house"
                    />
                  </Grid.Column>
                )}
              </Grid.Row>
            </Grid>
          </Grid.Column>
          {/* Tutorial */}
          <Grid.Column width={4}>
            <Sticky id="stickyNode">
              <Header as="h1">About Goals</Header>
              <Header as="h3">
                Whether you want to get out of debt, buy a home, or save for
                retirement, $ helps you reach your financial goals.
              </Header>
              <Header as="p">
                1. To get started, choose a goal from our list or create your
                own.
              </Header>
              <Header as="p">
                2. Use our calculator to determine how much you need to save.
              </Header>
              <Header as="p">
                3. Set a goal with either an end date or monthly amount in mind.
              </Header>
              <Header as="p">
                4. Link your goal to an account so it's easy to stick to your
                plan.
              </Header>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
    retirement: state.retirement,
    emergencyGoal: state.emergencyGoalReducer,
    houseForm: state.houseForm
  };
};

export default connect(mapStateToProps)(GoalsMenu);
