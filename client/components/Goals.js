import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment } from "semantic-react";
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
        <Segment>Goal Page</Segment>
        {goals ? (
          <Segment>
            <GoalsComponent />
          </Segment>
        ) : (
          <Segment>
            <GoalsMenu />
          </Segment>
        )}
        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  //set up number of goals of each user
  return {};
};

export default connect(mapState)(Goals);
