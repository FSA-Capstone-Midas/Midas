import React, { Component } from "react";
import {
  Grid,
  Segment,
  Card,
  Sticky,
  Header,
  Button,
  Image,
  Modal
} from "semantic-ui-react";
import { connect } from "react-redux";

const ModalModalExample = props => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

//render menu
class GoalsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { hi: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, data) {
    console.log(data.name);
    this.setState({ hi: true });
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
                  <Modal
                    trigger={
                      <Button>
                        <Card
                          header="Pay off Credit Card Debit"
                          image={"../../../../../../pictures/matthew.png"}
                          onClick={event =>
                            this.handleClick(event, { name: "creditCard" })
                          }
                        />
                      </Button>
                    }
                  >
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size="medium" />
                      <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                          We've found the following gravatar image associated
                          with your e-mail address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
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

const mapState = state => {
  return {};
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(GoalsMenu);
