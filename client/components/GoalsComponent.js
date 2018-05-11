import React, { Component } from "react";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";

const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src="../../../../../../pictures/matthew.png" />

      <Item.Content>
        <Item.Header as="a">12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className="cinema">Union Square 14</span>
        </Item.Meta>
        <Item.Description>pending</Item.Description>
        <Item.Extra>
          <Label>Retirement</Label>
          <Label icon="globe" content="Additional Languages" />
        </Item.Extra>
      </Item.Content>
    </Item>

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
  </Item.Group>
);

//render box
class GoalsComponent extends Component {
  render() {
    return (
      <Segment>
        <ItemExampleDivided />
      </Segment>
    );
  }
}

export default GoalsComponent;
