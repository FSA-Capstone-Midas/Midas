import React, { Component } from "react";
import { Button, Icon, Item, Label, Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import GoalsOptions from "./GoalsOptions";

//render box
class GoalsComponent extends Component {
  render() {
    let { retirement, goals, emergency, houseForm } = this.props;
    return (
      <Grid.Column>
        <GoalsOptions
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

export default connect(mapStateToProps, null)(GoalsComponent);
