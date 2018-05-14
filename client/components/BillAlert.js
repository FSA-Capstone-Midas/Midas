import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Icon, Grid, Step } from "semantic-ui-react";
import BillForm from "./BillForm";

class BillAlert extends Component {
  render() {
    const { id, user, userInfo, bills, all, accounts } = this.props;
    if (bills && bills.id) {
      const newDate = new Date().toString().split(" ");
      const oldDate = bills.date.split("-");
      this.result = Math.abs(Number(newDate[2]) - Number(oldDate[1]));
    }

    return (
      <div>
        <Grid columns={1}>
          <Grid.Column>
            <Step.Group fluid vertical style={{ backgroundColor: "burlywood" }}>
              <Step active style={{ backgroundColor: "gold" }}>
                <Icon color="red" name="announcement" />
                <Step.Content>
                  <Step.Title>
                    {bills.id ? (
                      <h4>
                        Your ${bills.price} monthly rent bill is due in{" "}
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
    bills: state.bills,
    all: state,
    accounts: state.accounts.accountInfo
  };
};

export default connect(mapState)(BillAlert);
