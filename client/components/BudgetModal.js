import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { updateUserBudget } from "../store";

/*eslint-disable*/
class BudgetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      budgetForCategory: 0
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handChangeBudget = this.handleChangeBudget.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }
  handleChangeBudget(event) {
    console.log("event.target", event.target);
    this.setState({ budgetForCategory: +event.target.value });
  }
  handleSubmit(event, id) {
    event.preventDefault();
    const budgetObj = { [this.state.category]: this.state.budgetForCategory };
    dispatch(updataUserBudget(budgetObj, id));
  }
  render() {
    const { userId } = this.props;
    return (
      <Modal
        trigger={
          <Button className="ui button">
            <i aria-hidden="true" className="add icon" />Create a Budget
          </Button>
        }
      >
        <Modal.Header>Create Your Budget</Modal.Header>
        <Modal.Content image>
          <i aria-hidden="true" className="write massive icon" />
          <Modal.Description className="left">
            <Header>How ...</Header>
            <p>Select the budget cateogry you want to add,</p>
            <p>and write down the budget amount.</p>
            <p>Then just submit!</p>
          </Modal.Description>
          <form
            className="ui format form"
            onSubmit={(event, userId) => {
              this.handleSubmit(event, userId);
            }}
          >
            <label>
              <h5> Choose your budget category: </h5>

              <select onChange={this.handleChangeCategory}>
                <option value="foodAndDrink">Food and Drink</option>
                <option value="recreation">Recreation</option>
                <option value="service">Service</option>
                <option value="shop">Shop</option>
                <option value="travel">Travel</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </label>
            <br />
            <label>
              <h5> Budgeted Spending $: </h5>

              <input
                className="field"
                name="spending"
                onChange={event => this.handleChangeBudget(event)}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapState = state => {
  return {
    userId: state.user.id
  };
};
const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    }
  };
};
export default connect(mapState)(BudgetModal);
