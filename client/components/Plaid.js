import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
import {
  fetchInformation,
  fetchItem,
  fetchTransaction,
  fetchIncome
} from "../store";
class Plaid extends Component {
  render() {
    const {
      handleOnSuccess,
      handleAccount,
      handleTransaction,
      handleIncome
    } = this.props;
    // console.log(getData);
    return (
      <div>
        <PlaidLink
          clientName="Midas"
          env="development"
          product={["auth", "transactions"]}
          publicKey="f274c354ebdaf254570702d564cd40"
          onExit={this.handleOnExit}
          onSuccess={handleOnSuccess}
          //   onLoad={getData}
        >
          Open Link and connect your bank!
        </PlaidLink>
        <button onClick={evt => handleAccount(evt)}>Get Account</button>
        <button onClick={evt => handleTransaction(evt)}>
          Get transactions
        </button>
        <button onClick={evt => handleIncome(evt)}>Get income</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    handleOnExit(error, metadata) {
      console.log("link: user exited");
      console.log(error, metadata);
    },
    handleOnSuccess(token, metadata) {
      dispatch(fetchInformation(token, metadata));
    },
    handleAccount(event) {
      event.preventDefault();
      dispatch(fetchItem());
    },
    handleTransaction(event) {
      event.preventDefault();
      dispatch(fetchTransaction());
    },
    handleIncome(event) {
      event.preventDefault();
      dispatch(fetchIncome());
    }
  };
}

const PlaidContainer = connect(mapStateToProps, mapDispatchToProps)(Plaid);

export default PlaidContainer;
