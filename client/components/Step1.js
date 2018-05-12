import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "semantic-ui-react";
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
    this.props.nextStep();
  }

  render() {
    const { handleChange, handleSelectChange, form } = this.props;

    return (
      <div>
        <h2 />
        <h2>
          We need some information to calculate the chance that your portfolio
          will support your spending goals throughout retirement.
        </h2>
        <h2 />
        <h2> First, let's establish the timeline for your plan.</h2>

        <h2 />
        <div>
          <Form className="ui huge">
            <Form.Group widths="equal">
              <Form.Field>
                <label>Birth Year</label>
                <Input
                  type="text"
                  name="birthyear"
                  value={form.birthyear}
                  onChange={handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>Retirement Age</label>
                <Input
                  type="text"
                  name="retirementage"
                  value={form.retirementage}
                  onChange={handleChange}
                />
              </Form.Field>
              <h2 />
              <Form.Field>
                <label>Marital Status</label>
                <Form.Dropdown
                  fluid
                  selection
                  placeholder="Martial Status"
                  options={options}
                  value={form.martialStatus}
                  name="martialStatus"
                  onChange={handleSelectChange}
                />
              </Form.Field>
            </Form.Group>
          </Form>

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
    handleSelectChange(e, { value }) {
      dispatch(addFormdetails({ martialStatus: value }));
    },
  };
};

const Step1Container = connect(mapStateToProps, mapDispatchToProps)(Step1);

export default Step1Container;
