import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { connect } from "react-redux";

// const data = [
//   {
//     day: "2016-03-15",
//     value: 165,
//   },
// ];

class UserHomeCalender extends React.Component {
  constructor(props) {
    super(props);
    this.renderData = this.renderData.bind(this);
  }

  renderData(allTrans) {
    const spendingCategory = [
      "Bank Fees",
      "Community",
      "Food and Drink",
      "Recreation",
      "Service",
      "Shops",
      "Travel",
    ];

    const filteredTransactions = allTrans.filter(singleT => {
      if (
        spendingCategory.includes(singleT.category[0]) &&
        singleT.amount < 1500 &&
        singleT.amount > 0
      ) {
        return singleT;
      }
    });

    let counts = filteredTransactions.reduce((prev, curr) => {
      let count = prev.get(curr.date) || 0;
      prev.set(curr.date, curr.amount + count);
      return prev;
    }, new Map());

    // then, map your counts object back to an array
    let data = [...counts].map(([day, oldValue]) => {
      let value = Math.round(oldValue);
      return { day, value };
    });
    console.log("what is data", data);
    return data;
  }

  render() {
    const { transaction } = this.props;

    console.log("what is transaction", transaction);

    return (
      <div style={{ height: 500, width: "100%" }}>
        {this.props.transaction ? (
          <ResponsiveCalendar
            data={this.renderData(this.props.transaction)}
            from="2017-02-01"
            to="2018-05-25"
            emptyColor="#eeeeee"
            colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
            margin={{
              top: 50,
              right: 5,
              bottom: 60,
              left: 5,
            }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            monthLegendOffset={10}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 45,
                itemCount: 20,
                itemWidth: 54,
                itemHeight: 36,
                itemDirection: "top-to-bottom",
              },
            ]}
          />
        ) : null}
      </div>
    );
  }
}

const mapState = state => {
  return {
    transaction: state.transactions.transaction,
  };
};

export default connect(mapState)(UserHomeCalender);
