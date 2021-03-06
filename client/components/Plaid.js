import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
import { fetchInformation } from "../store";

class Plaid extends Component {
  render() {
    const { handleOnSuccess, handleOnExit } = this.props;
    return (
      <div>
        <PlaidLink
          clientName="Midas"
          env="development"
          product={["auth", "transactions"]}
          publicKey="75968c85b9fcf14bb18a8e198161ad"
          onExit={handleOnExit}
          onSuccess={handleOnSuccess}
          //   onLoad={getData}
        >
          Connect your bank account to Midas!
        </PlaidLink>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    handleOnExit(metadata) {
      //user cancel to add bank to account
      // console.log(error, metadata)
    },
    handleOnSuccess(token, metadata) {
      dispatch(fetchInformation(token, metadata));
    }
  };
};

export default connect(null, mapDispatch)(Plaid);
