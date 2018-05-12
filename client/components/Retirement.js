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

  showStep() {
    switch (this.state.step) {
      case 1:
        return <Step1 nextStep={this.nextStep} />;
      case 2:
        return (
          <Step2 nextStep={this.nextStep} previousStep={this.previousStep} />
        );
      case 3:
        return (
          <Step3Confirmation
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            submitRegistration={this.submitRegistration}
          />
        );
      case 4:
        return null;
    }
  }

  render() {
    const classNameStep1 = this.state.step === 1 ? "active" : "";
    const classNameStep2 = this.state.step === 2 ? "active" : "";
    const classNameStep3 = this.state.step === 3 ? "active" : "";

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
                      {this.state.step !== 4 ? (
                        <div>
                          <h1>
                            {this.props.user.firstName}, looks like you are
                            ready to take charge of your retirement?
                          </h1>
                          <div className="ui massive steps">
                            <div className={"step " + classNameStep1}>
                              <i className="user icon" />
                              <div className="content">
                                <div className="title">Basic Info</div>
                                <div className="description">
                                  Tell us more about you!
                                </div>
                              </div>
                            </div>

                            <div className={"step " + classNameStep2}>
                              <i className="payment icon" />
                              <div className="content">
                                <div className="title">More Info</div>
                                <div className="description">
                                  What's your financial habits?
                                </div>
                              </div>
                            </div>

                            <div className={"step " + classNameStep3}>
                              <i className="info icon" />
                              <div className="content">
                                <div className="title">Confirmation</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
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
    user: state.user,
  };
};

const RetirementContainer = connect(mapStateToProps, null)(Retirement);

export default RetirementContainer;
