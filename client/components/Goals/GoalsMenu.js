import React, { Component } from "react";
import { Grid, Segment, Card, Sticky, Header, Button } from "semantic-ui-react";
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
      <Grid style={{ paddingTop: "1em" }}>
        <Grid.Row>
          <Grid.Column width={6} verticalAlign="middle">
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
                3. Set a goal with either an end date or monthly amount in mind.
              </p>
              <p>
                4. Link your goal to an account so it's easy to stick to your
                plan.
              </p>
            </div>
          </Grid.Column>

          <Card.Group itemsPerRow={3}>
            <Button>
              <Card
                header="Save for Retirement"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
                as={NavLink}
                to="/retirement"
              />
            </Button>

            <Button>
              <Card
                header="Save for an Emergency"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
                as={NavLink}
                to="/goals/saveForEmergency"
              />
            </Button>

            <Button>
              <Card
                header="Buy a house"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
                as={NavLink}
                to="/house"
              />
            </Button>
          </Card.Group>
        </Grid.Row>
      </Grid>
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
