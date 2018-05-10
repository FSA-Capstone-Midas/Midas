import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Dropdown, Select, Button } from "semantic-ui-react";
import { addFormdetails } from "../store/form";

const options = [
  { key: "s", text: "Single", value: "single" },
  { key: "m", text: "Married", value: "married" },
];

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(event) {
    event.preventDefault();
    console.log("event");
    this.props.nextStep();
  }

  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <h2>
          We need some information to calculate the chance that your portfolio
          will support your spending goals throughout retirement. First, let's
          establish the timeline for your plan.
        </h2>
        <div>
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Birth Year</label>
                <input type="text" name="birthyear" onChange={handleChange} />
              </Form.Field>

              <Form.Field>
                <label>Retirement Age</label>
                <input
                  type="text"
                  name="retirementage"
                  onChange={handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>Marital Status</label>
                <Form.Dropdown
                  control={Select}
                  fluid
                  selection
                  placeholder="Martial Status"
                  options={options}
                  name="martialStatus"
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>
          </Form>

          <Button positive onClick={this.nextStep}>
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

const Step1Container = connect(mapStateToProps, mapDispatchToProps)(Step1);

export default Step1Container;
