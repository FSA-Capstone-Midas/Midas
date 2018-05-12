import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment, Button, Container } from "semantic-ui-react";
import GoalsComponent from "./GoalsComponent";
import GoalsMenu from "./GoalsMenu";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

class Goals extends Component {
  constructor(props) {
    super(props);
    //return menu bar if no goals
    this.state = {
      goals: false
    };
  }

  render() {
    let { goals } = this.state;
    return (
      <ResponsiveContainer>
        <Container>
          <Segment>Goal Page</Segment>
          {goals ? (
            <Segment>
              <div>
                <Button positive>Add More Goals!</Button>
              </div>
              <GoalsComponent />
            </Segment>
          ) : (
            <Segment>
              <h1>You have not added any goals. Get Started</h1>
              <h3>Choose a Goal:</h3>
              <GoalsMenu />
            </Segment>
          )}
        </Container>
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  //set up number of goals of each user
  return {};
};

export default connect(mapState)(Goals);
