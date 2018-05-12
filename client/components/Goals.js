import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment, Button } from "semantic-ui-react";
import GoalsComponent from "./GoalsComponent";
import GoalsMenu from "./GoalsMenu";
import { fetchRetirementDetails, getHouseFormdetails } from "../store";

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
      goals: false,
    };
  }

  componentDidMount() {
    this.props.fetchRetirementDetails(this.props.user.id);
    this.props.getHouseFormdetails(this.props.user.id);
  }

  render() {
    let { goals } = this.state;
    let { retirement, houseForm } = this.props;

    return (
      <ResponsiveContainer>
        <Segment>Goal Page</Segment>
        {retirement.birthyear || houseForm.annualIncome || goals ? (
          <Segment>
            <GoalsComponent goals={goals} houseForm={houseForm} />
          </Segment>
        ) : null}
        <Segment>
          {retirement.birthyear || houseForm.annualIncome || goals ? (
            <h1>You have not added the following goals. Get Started</h1>
          ) : (
            <h1>You have not added any goals. Get Started</h1>
          )}
          <h3>Choose a Goal:</h3>
          <GoalsMenu />
        </Segment>
        )}
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
    retirement: state.retirement,
    houseForm: state.houseForm,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRetirementDetails(userId) {
      dispatch(fetchRetirementDetails(userId));
    },
    getHouseFormdetails(userId) {
      dispatch(getHouseFormdetails(userId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
