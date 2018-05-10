/*import React, { Component } from "react";
import { connect } from "react-redux";

class BudgetInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "foodAndDrink" };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }
  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <label>
          <h5> Choose your budget category: </h5>

          <select value={this.state.value} onChange={this.handleChange}>
            <option value="foodAndDrink">Food and Drink</option>
            <option value="recreattion">Recreation</option>
            <option value="service">Service</option>
            <option value="shop">Shop</option>
            <option value="travel">Travel</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </label>
        <label>
          <h5> Budgeted Spending $: </h5>

          <input
            className="field"
            name="spending"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
//export default BudgetInput;

const mapState = state => {
  return {
    userId: state.user.id
  };
};
const mapDispatch = dispatch => {
  return {
    handleInputChange(event) {},
    handleSubmit(evt) {
      evt.preventDefault();
      dispatch(auth(email, password, formName, firstName, lastName));
    }
  };
};

export default connect(mapState)(BudgetInput);
*/
