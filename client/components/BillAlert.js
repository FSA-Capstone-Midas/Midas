import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Grid, Step } from "semantic-ui-react";

class BillAlert extends Component {
  render() {
    const { bills } = this.props;
    if (bills) {
      const newDate = new Date().toString().split(" ");
      const oldDate = bills.date.split("-");
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
                    {bills.id ? (
                      <h4 style={{ fontSize: "15px" }}>
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
    bills: state.bills,
  };
};

export default connect(mapState)(BillAlert);
