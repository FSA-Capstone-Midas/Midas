import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

const SignUp = () => (
  <form className="ui form">
    <div className="equal width fields">
      <div className="field">
        <label>First name</label>
        <div className="ui fluid input">
          <input type="text" placeholder="First name" />
        </div>
      </div>
      <div className="field">
        <label>Last name</label>
        <div className="ui fluid input">
          <input type="text" placeholder="Last name" />
        </div>
      </div>
    </div>
  </form>
);
export default SignUp;
