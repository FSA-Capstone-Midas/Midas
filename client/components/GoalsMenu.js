import React, { Component } from "react";
import { Grid, Segment, Card, Sticky, Header } from "semantic-ui-react";

//render menu
class GoalsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("hi");
  }

  render() {
    return (
      <Segment>
        <h1>You have not added any goals. Get Started</h1>
        <h3>Choose a Goal:</h3>

        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Card
                header="Pay off Credit Card Debit"
                image={"../../../../../../pictures/matthew.png"}
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Save for Retirement"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Save for an Emergency"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
              />
            </Grid.Column>
            <Grid.Column>
              <Sticky>
                <Header as="h3">Tutorial</Header>
                <body>hehehe</body>
              </Sticky>
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Buy a house"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Buy a Car"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Save for College"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Take a Trip"
                onClick={this.handleClick}
                image={"../../../../../../pictures/matthew.png"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default GoalsMenu;
