import React, { Component } from "react";
import { getRadioOrCheckboxValue } from "./utils";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    // Get values via querySelector
    var age = document.querySelector("input[name=\"age\"]:checked");
    var colors = document.querySelectorAll("input[name=\"colors\"]");

    var data = {
      age: getRadioOrCheckboxValue(age),
      colors: getRadioOrCheckboxValue(colors),
    };

    this.props.saveValues(data);
    this.props.nextStep();
  }

  renderOptions(category, name, value, index) {
    var isChecked = function() {
      if (category == "radio") return value == this.props.fieldValues[name];

      if (category == "checkbox") return this.props.fieldValues[name].indexOf(value) >= 0;

      return false;
    }.bind(this);

    return (
      <label key={index}>
        <input
          category={category}
          name={name}
          value={value}
          defaultChecked={isChecked()}
        />{" "}
        {value}
      </label>
    );
  }

  render() {
    return (
      <div>
        <h2>Survey Question</h2>
        <ul className="form-fields">
          <li className="radio">
            <span className="label">Age</span>
            {["18-26", "27-38", "39-50", "51-62"].map(
              this.renderOptions.bind(this, "radio", "age")
            )}
          </li>
          <li className="checkbox">
            <span className="label">Favorite Colors</span>
            {["Blue", "Red", "Orange", "Green"].map(
              this.renderOptions.bind(this, "checkbox", "colors")
            )}
          </li>
          <li className="form-footer">
            <button
              className="btn -default pull-left"
              onClick={this.props.previousStep}
            >
              Back
            </button>
            <button className="btn -primary pull-right" onClick={this.nextStep}>
              Save & Continue
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Step1;