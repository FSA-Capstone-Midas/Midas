import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import { Grid, Segment } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3Confirmation from "./Step3Confirmation";
import Step4Success from "./Step4Success";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class Retirement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      step: 1,
    };

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
    this.showStep = this.showStep.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1,
    });
  }

  submitRegistration() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep();
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return (
          <Step1 nextStep={this.nextStep} previousStep={this.previousStep} />
        );
      case 2:
        return (
          <Step2 nextStep={this.nextStep} previousStep={this.previousStep} />
        );
      case 3:
        return (
          <Step3Confirmation
            fieldValues={this.state.fieldValues}
            previousStep={this.previousStep}
            submitRegistration={this.submitRegistration}
          />
        );
      case 4:
        return <Step4Success fieldValues={this.state.fieldValues} />;
    }
  }

  render() {
    console.log("account ", this.props.account); //user account info
    console.log("transaction ", this.props.transaction); //user
    // const { step, fieldValues } = this.state;

    // const style = {
    //   width: this.state.step / 4 * 100 + "%",
    // };

    return (
      <ResponsiveContainer>
        <Segment
          id="howItWorksBackground"
          style={{ padding: "1.5em" }}
          vertical
        >
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "2em" }}
              >
                {this.state.loading ? (
                  <Loading />
                ) : (
                  <div>
                    <main>
                      <span className="progress-step">
                        Step {this.state.step}
                      </span>
                      <progress className="progress" />
                      {this.showStep()}
                    </main>
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.accounts.accountInfo,
    transaction: state.transactions.transaction,
    form: state.form,
  };
};

const RetirementContainer = connect(mapStateToProps, null)(Retirement);

export default RetirementContainer;
