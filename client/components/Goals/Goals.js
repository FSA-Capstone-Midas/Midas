import React, { Component } from "react";
import DesktopContainer from "../AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "../AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import Footer from "../Footer";
import { Segment, Grid, Container, Divider } from "semantic-ui-react";
import GoalsComponent from "./GoalsComponent";
import GoalsMenu from "./GoalsMenu";
import {
  fetchRetirementDetails,
  getHouseFormdetails,
  fetchEmergencyGoal
} from "../../store";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: false
    };
  }

  componentDidMount() {
    this.props.fetchRetirementDetails(this.props.user.id);
    this.props.getHouseFormdetails(this.props.user.id);
    this.props.fetchEmergencyGoal(this.props.user.id);
  }

  render() {
    let { goals } = this.state;
    let { retirement, emergency, houseForm } = this.props;
    return (
      <ResponsiveContainer>
        <Segment id="headerBackground" style={{ padding: "0.7em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.7em", paddingTop: "0.7em" }}
              >
                <h3>Goals</h3>
                <h4>Let's set your goals straight today.</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Container id="mainContent">
          <Grid>
            <Grid.Row textAlign="center">
              <Grid.Column
                textAlign="center"
                style={{ paddingBottom: "0em", paddingTop: "2em" }}
              >
                {retirement.birthyear &&
                houseForm.annualIncome &&
                emergency.isEnter ? (
                  <h4>You have set up all your goals! Review them below</h4>
                ) : retirement.birthyear ||
                houseForm.annualIncome ||
                emergency.isEnter ? (
                  <div>
                    <h4>You have not added the following goals. Get Started</h4>
                    <GoalsMenu />
                  </div>
                ) : (
                  <div>
                    <h4>You have not added any goals. Get Started</h4>
                    <h5>Choose a Goal:</h5>
                    <GoalsMenu />
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {retirement.birthyear ||
          houseForm.annualIncome ||
          emergency.isEnter ||
          goals ? (
            <Grid
              style={{
                padding: "2em 0em",
                fontSize: "12px"
              }}
            >
              <GoalsComponent
                goals={goals}
                houseForm={houseForm}
                emergency={emergency}
              />
            </Grid>
          ) : null}
        </Container>
        <Divider hidden />
        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
    retirement: state.retirement,
    emergency: state.emergencyGoalReducer,
    houseForm: state.houseForm
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
    fetchEmergencyGoal(userId) {
      dispatch(fetchEmergencyGoal(userId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
