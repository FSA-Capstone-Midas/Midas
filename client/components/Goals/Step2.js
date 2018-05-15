import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { addFormdetails } from "../../store/form";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep(event) {
    event.preventDefault();
    this.props.nextStep();
  }

  previousStep(event) {
    event.preventDefault();
    this.props.previousStep();
  }

  render() {
    const { handleChange, form } = this.props;

    return (
      <div>
        <h4>
          We need some information to calculate the chance that your portfolio
          will support your spending goals throughout retirement.
        </h4>
        <h2 />
        <h4>First, let's establish the timeline for your plan.</h4>
        <h2 />

        <div>
          <Form className="ui huge">
            <Form.Group widths="equal">
              <Form.Field>
                <label>What You've Saved So Far</label>
                <input
                  type="text"
                  name="savedSoFar"
                  value={form.savedSoFar}
                  onChange={handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>How Much You Save Each Year</label>
                <input
                  type="text"
                  name="saveEachYear"
                  value={form.saveEachYear}
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>How Much You Earn Each Year</label>
                <input
                  type="text"
                  name="earnEachYear"
                  value={form.earnEachYear}
                  onChange={handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>Monthly Retirement Spending</label>
                <input
                  type="text"
                  name="monthlyRetirementSpending"
                  onChange={handleChange}
                  value={form.monthlyRetirementSpending}
                />
              </Form.Field>
            </Form.Group>
          </Form>

          <Button size="huge" positive onClick={this.previousStep}>
            Go Back
          </Button>
          <Button size="huge" positive onClick={this.nextStep}>
            Save & Continue
          </Button>
        </div>
      </div>
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

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(event) {
      dispatch(addFormdetails({ [event.target.name]: event.target.value }));
    },
  };
};

const Step2Container = connect(mapStateToProps, mapDispatchToProps)(Step2);

export default Step2Container;
