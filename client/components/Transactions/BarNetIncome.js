import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// get today's data
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth();

var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sept";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

var currentMonth = month[mm];

const data = [];

function numToString(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num + "";
}

data.push(
  { name: "Jun", month: numToString((mm + 2) % 12 || mm + 2), year: 2017 },
  { name: "Jul", month: numToString((mm + 3) % 12 || mm + 3), year: 2017 },
  { name: "Aug", month: numToString((mm + 4) % 12 || mm + 4), year: 2017 },
  {
    name: "Sept",
    month: numToString((mm + 5) % 12 || mm + 5),
    year: 2017,
  },
  { name: "Oct", month: numToString((mm + 6) % 12 || mm + 6), year: 2017 },
  { name: "Nov", month: numToString((mm + 7) % 12 || mm + 7), year: 2017 },
  { name: "Dec", month: numToString((mm + 8) % 12 || mm + 8), year: 2017 },
  { name: "Jan", month: numToString((mm + 9) % 12 || mm + 9), year: 2018 },
  {
    name: "Feb",
    month: numToString((mm + 10) % 10 || mm + 3),
    year: 2018,
  },
  { name: "Mar", month: numToString((mm + 11) % 12 || mm + 11), year: 2018 },
  { name: "Apr", month: numToString((mm + 12) % 12 || mm + 12), year: 2018 },
  {
    name: currentMonth,
    month: numToString((mm + 13) % 12 || mm + 13),
    year: 2018,
  }
);
const spendingCategory = {
  Interest: 0,
  Transfer: 0,
  "Food and Drink": 0,
};

class BarNetIncome extends Component {
  render() {
    const { rows } = this.props;

    data.forEach((el, index) => {
      let sum = rows.reduce((acc, transaction) => {
        if (el.month === transaction.date.slice(5, 7)) {
          return acc + transaction.amount;
        }
        return acc;
      }, 0);
      data[index]["Net Income"] = -Math.round(sum, 2);
    });

    return (
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Net Income"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default BarNetIncome;
