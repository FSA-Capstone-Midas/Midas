import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Grid, Step } from "semantic-ui-react";

class PhoneAlert extends Component {
  render() {
    const { phone } = this.props;
    if (phone && phone.id) {
      const newDate = new Date().toString().split(" ");
      const oldDate = phone.date.split("-");
      this.result = Math.abs(Number(newDate[2]) - Number(oldDate[1]));
    }

    return (
      <div>
        <Grid columns={1}>
          <Grid.Column>
            <Step.Group fluid vertical style={{ backgroundColor: "burlywood" }}>
              <Step active style={{ backgroundColor: "#FFC107" }}>
                <Icon color="blue" name="calendar" />
                <Step.Content>
                  <Step.Title>
                    {phone.id ? (
                      <h4 style={{ fontSize: "15px" }}>
                        Your ${phone.price} monthly phone bill is due in{" "}
                        {this.result} days.
                      </h4>
                    ) : null}
                  </Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapState = state => {
  //set up number of goals of each user
  return {
    user: state.user,
    id: state.user.id,
    phone: state.phone,
    all: state,
    accounts: state.accounts.accountInfo
  };
};

export default connect(mapState)(PhoneAlert);
