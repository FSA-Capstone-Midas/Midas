import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header, Modal } from "semantic-ui-react";
import { updateUserBudget } from "../../store/budget";

class BudgetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      showMessage: false,
      category: "foodAndDrink",
      budgetForCategory: 0,
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handChangeBudget = this.handleChangeBudget.bind(this);
    this.handleLocalState = this.handleLocalState.bind(this);
    this.changeLocalStateBack = this.changeLocalStateBack.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleLocalState() {
    this.setState({ showMessage: true });
    setTimeout(this.changeLocalStateBack, 1000);
  }
  changeLocalStateBack() {
    this.setState({ showMessage: false, budgetForCategory: 0 });
  }
  handleChangeCategory(event) {
    this.setState({ category: event.target.value, budgetForCategory: 0 });
  }
  handleChangeBudget(event) {
    this.setState({ budgetForCategory: +event.target.value });
  }
  handleOpen() {
    this.setState({ modalOpen: true });
  }
  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    const userId = this.props.user.id;
    const handleSubmit = this.props.handleSubmit;
    const budgetItemObj = {
      [this.state.category]: this.state.budgetForCategory,
      userId,
    };
    return (
      <Modal
        trigger={
          <Button
            onClick={this.handleOpen}
            className="ui brown huge inverted button"
          >
            <i aria-hidden="true" className="add icon" />Create a Budget
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        className="scrolling"
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
            className="format"
            onSubmit={event => {
              this.handleLocalState();
              handleSubmit(event, budgetItemObj, userId);
            }}
          >
            <label>
              <h5> Choose your budget category: </h5>

              <select onChange={this.handleChangeCategory}>
                <option value="foodAndDrink">Food and Drink</option>
                <option value="recreation">Recreation</option>
                <option value="service">Service</option>
                <option value="shops">Shops</option>
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
                value={this.state.budgetForCategory}
                onChange={event => this.handleChangeBudget(event)}
              />
            </label>
            <br />
            {this.state.showMessage ? (
              <h5 id="alertMessage">Budget created!</h5>
            ) : null}
            <input type="submit" value="Submit" />
          </form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            Close!
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
  };
};
const mapDispatch = dispatch => {
  return {
    handleSubmit: (event, budgetObject, id) => {
      event.preventDefault();
      dispatch(updateUserBudget(budgetObject, id));
    },
  };
};
export default connect(mapState, mapDispatch)(BudgetModal);
