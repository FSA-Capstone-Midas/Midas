import React, { Component } from "react";
import { connect } from "react-redux";
import RC2 from "react-chartjs2";

class TransactionsPie extends Component {
  render() {
    const { rows } = this.props;

    return (
      <RC2
        data={{
          labels: ["Interest", "Transfer", "Misc"],
          datasets: [
            {
              data: [
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Interest") {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
                Math.round(
                  rows.reduce((acc, curr) => {
                    if (curr.category[0] === "Transfer") {
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
                      curr.name.slice(0, 13) === "BOOK TRANSFER"
                    ) {
                      return acc + curr.amount;
                    }
                    return acc;
                  }, 0),
                  2
                ),
              ],
              backgroundColor: [
                "#FF6384",
                "#00A0EF",
                "#FF8800",
                {
                  /* "#FF005B",
                "#FFCE56", */
                  /* "#D5A0FF", */
                  /* "#00D5D1", */
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

export default connect(null)(TransactionsPie);
