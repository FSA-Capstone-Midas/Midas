import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import history from "../history";
import {
  Form,
  Input,
  Dropdown,
  Select,
  Button,
  Item,
  Icon,
} from "semantic-ui-react";

class Step3Confirmation extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  previousStep(event) {
    event.preventDefault();
    this.props.previousStep();
  }

  nextStep(event) {
    event.preventDefault();
    this.props.nextStep();
  }

  submitRegistration(event, id, formDetails) {
    event.preventDefault();
    console.log("do i get here?");
    axios
      .post(`/api/retirement/user/${id}`, formDetails)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    this.props.nextStep();
  }

  render() {
    const { form, user } = this.props;

    return (
      <div className="centered">
        <h2>Confirm Registration</h2>

        <div className="ui relaxed items">
          <div className="item">
            <div className="middle aligned content">
              <div className="header">
                <i className="like icon" />
                <b>Birth Year:</b> {form.birthyear}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              <div className="header">
                <i className="favorite icon" />
                <b>Retirement Age:</b> {form.retirementage}
              </div>
            </div>
          </div>

          <div className="item middle aligned content">
            <div className="middle aligned content">
              <div className="header">
                <i className="favorite icon" />
                <b>What You've Saved So Far:</b> {form.savedSoFar}
              </div>
            </div>
          </div>

          <div className="item">
            <div className="middle aligned content">
              <div className="header">
                <i className="favorite icon" />
                <b>How Much You Save Each Year:</b> {form.saveEachYear}
              </div>
            </div>
          </div>

          <div className="item">
            <div className="middle aligned content">
              <div className="header">
                <i className="favorite icon" />
                <b>How Much You Earn Each Year:</b> {form.earnEachYear}
              </div>
            </div>
          </div>

          <div className="item">
            <div className="middle aligned content">
              <div className="header">
                <i className="favorite icon" />
                <b>Monthly Retirement Spending:</b>{" "}
                {form.monthlyRetirementSpending}
              </div>
            </div>
          </div>
        </div>

        <Button size="huge" positive onClick={this.previousStep}>
          Back
        </Button>
        <Button
          size="huge"
          positive
          onClick={() => {
            console.log("what is user", form);
            this.submitRegistration(event, user.id, form);
          }}
        >
          Submit Registration
        </Button>
      </div>
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

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     submitRegistration(event) {
//       dispatch(addFormdetails({ [event.target.name]: event.target.value }));
//     },
//   };
// };

const Step3ConfirmationContainer = connect(mapStateToProps, null)(
  Step3Confirmation
);

export default Step3ConfirmationContainer;