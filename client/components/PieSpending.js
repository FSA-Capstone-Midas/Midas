import React, { Component } from "react";
import { connect } from "react-redux";
import RC2 from "react-chartjs2";

class PieSpending extends Component {
  render() {
    const { rows } = this.props;

    return (
      <RC2
        data={{
          labels: [
            "Bank Fees",
            "Community",
            "Food and Drink",
            "Recreation",
            "Service",
            "Shops",
            "Travel",
          ],
          datasets: [
            {
              data: [
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Bank Fees") {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Community") {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (
                      curr.category[0] === "Food and Drink" &&
                      curr.name.slice(0, 13) !== "BOOK TRANSFER"
                    ) {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Recreation") {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Service") {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Shops") {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Travel") {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
              ],
              backgroundColor: [
                "#FF6384",
                "#D5A0FF",
                "#FFCE56",
                "#FF005B",
                "#00D5D1",
                "#00A0EF",
                "#FF8800",
                {
                  /* "#0095FF", */
                },
              ],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        }}
        type="doughnut"
      />
    );
  }
}

export default connect(null)(PieSpending);
