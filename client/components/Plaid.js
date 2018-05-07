import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
import {
  fetchInformation,
  fetchItem,
  fetchTransaction,
  fetchIncome,
  fetchIdentity,
  fetchAsset,
  fetchMakingAsset
} from "../store";
class Plaid extends Component {
  render() {
    const {
      handleOnSuccess,
      handleAccount,
      handleTransaction,
      handleIncome,
      handleIdentity,
      handleAsset,
      handleMakingAsset
    } = this.props;
    // console.log(getData);
    return (
      <div>
        <PlaidLink
          clientName="Midas"
          env="development"
          product={[
            "auth",
            "transactions",
            "connect",
            "info",
            "identity",
            "income"
          ]}
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
        <button onClick={evt => handleIdentity(evt)}>Get identity</button>
        <button onClick={evt => handleAsset(evt)}>Get asset</button>
        <button onClick={evt => handleMakingAsset(evt)}>make asset</button>
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
    },
    handleIdentity(event) {
      event.preventDefault();
      dispatch(fetchIdentity());
    },
    handleAsset(event) {
      event.preventDefault();
      dispatch(fetchAsset());
    },
    handleMakingAsset(event) {
      event.preventDefault();
      dispatch(fetchMakingAsset());
    }
  };
}

const PlaidContainer = connect(mapStateToProps, mapDispatchToProps)(Plaid);

export default PlaidContainer;
