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
          publicKey="f274c354ebdaf254570702d564cd40"
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
      dispatch(fetchInformation("token", metadata));
    }
  };
}

export default connect(null, mapDispatchToProps)(Plaid);
