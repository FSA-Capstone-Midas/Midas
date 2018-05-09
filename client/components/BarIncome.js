import React, { Component } from "react";
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

class BarIncome extends Component {
  render() {
    const { rows } = this.props;

    data.forEach((el, index) => {
      Object.keys(spendingCategory).forEach(category => {
        let sum = rows.reduce((acc, transaction) => {
          if (
            (el.month === transaction.date.slice(5, 7) &&
              category === transaction.category[0] &&
              transaction.category[0] !== "Food and Drink") ||
            (el.month === transaction.date.slice(5, 7) &&
              category === transaction.category[0] &&
              transaction.category[0] === "Food and Drink" &&
              transaction.name.slice(0, 13) === "BOOK TRANSFER")
          ) {
            return acc + transaction.amount;
          }
          return acc;
        }, 0);

        if (category === "Food and Drink") {
          data[index].Misc = -Math.round(sum, 2);
        } else {
          data[index][category] = -Math.round(sum, 2);
        }
      });
    });

    return (
      <BarChart
        width={800}
        height={500}
        data={data}
        stackOffset="sign"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Interest" fill="#8884d8" stackId="stack" />
        <Bar dataKey="Transfer" fill="#82ca9d" stackId="stack" />
        <Bar dataKey="Misc" fill="#ffc658" stackId="stack" />
      </BarChart>
    );
  }
}

export default BarIncome;
