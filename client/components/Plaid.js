import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
class Plaid extends Component {
  render() {
    const { handleOnSuccess } = this.props;
    return (
      <div>
        <PlaidLink
          clientName="Your app name"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="PLAID_PUBLIC_KEY"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
        >
          Open Link and connect your bank!
        </PlaidLink>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    handleOnExit() {
      // handle the case when your user exits Link
    },
    handleOnSuccess(token, metadata) {
      // send token to client server
    }
  };
}

const PlaidContainer = connect(mapStateToProps, mapDispatchToProps)(Plaid);

export default PlaidContainer;
