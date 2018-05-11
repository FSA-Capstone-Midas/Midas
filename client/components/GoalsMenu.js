import React, { Component } from "react";
import { Grid, Segment, Card, Sticky, Header, Icon } from "semantic-ui-react";

//render menu
class GoalsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, data) {
    console.log(data.name);
  }

  render() {
    return (
      <Segment>
        <h1>You have not added any goals. Get Started</h1>
        <h3>Choose a Goal:</h3>
        <Grid>
          <Grid.Column width={12}>
            <Grid>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Card
                    header="Pay off Credit Card Debit"
                    image={"../../../../../../pictures/matthew.png"}
                    onClick={event =>
                      this.handleClick(event, { name: "creditCard" })
                    }
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
          </Grid.Column>
          <Grid.Column width={4}>
            <Sticky>
              <Header as="h3">Stuck Content</Header>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default GoalsMenu;
