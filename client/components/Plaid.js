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
          Open Link and connect your bank!
        </PlaidLink>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleOnExit(error, metadata) {
      console.log("link: user exited");
      console.log(error, metadata);
    },
    handleOnSuccess(token, metadata) {
      dispatch(fetchInformation(token, metadata));
    }
  };
}

export default connect(null, mapDispatchToProps)(Plaid);
