import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
import { fetchInformation, fetchItem } from "../store";
class Plaid extends Component {
  render() {
    const { handleOnSuccess, handleClick } = this.props;
    // console.log(getData);
    return (
      <div>
        <PlaidLink
          clientName="Midas"
          env="development"
          product={["auth", "transactions"]}
          publicKey="f274c354ebdaf254570702d564cd40"
          //   onExit={this.handleOnExit}
          onSuccess={handleOnSuccess}
          //   onLoad={getData}
        >
          Open Link and connect your bank!
        </PlaidLink>
        <button onClick={evt => handleClick(evt)} inverted color="olive">
          checkout here!
        </button>
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
    handleOnExit() {
      // handle the case when your user exits Link
    },
    handleOnSuccess(token, metadata) {
      dispatch(fetchInformation(token, metadata));
      dispatch(fetchItem());
    },
    handleClick(event) {
      event.preventDefault();
      dispatch(fetchItem());
    }
  };
}

const PlaidContainer = connect(mapStateToProps, mapDispatchToProps)(Plaid);

export default PlaidContainer;
