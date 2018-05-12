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
        {this.props.goals ? (
          <div>
            <Item>
              <Item.Image src="../../../../../../pictures/matthew.png" />

              <Item.Content>
                <Item.Header as="a">My Neighbor Totoro</Item.Header>
                <Item.Meta>
                  <span className="cinema">IFC Cinema</span>
                </Item.Meta>
                <Item.Description>pending</Item.Description>
                <Item.Extra>
                  <Label>Buy a House</Label>
                </Item.Extra>
              </Item.Content>
            </Item>

            <Item>
              <Item.Image src="../../../../../../pictures/matthew.png" />

              <Item.Content>
                <Item.Header as="a">Watchmen</Item.Header>
                <Item.Meta>
                  <span className="cinema">IFC</span>
                </Item.Meta>
                <Item.Description>College</Item.Description>
                <Item.Extra />
              </Item.Content>
            </Item>
          </div>
        ) : null}
      </Item.Group>
    );
  }
}

//render box
class GoalsComponent extends Component {
  render() {
    let { retirement, goals } = this.props;
    return (
      <Segment>
        <h1>Goals: </h1>
        <ItemExampleDivided retirement={retirement} />
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
    retirement: state.retirement
  };
};

export default connect(mapStateToProps, null)(GoalsComponent);
