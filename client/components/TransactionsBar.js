import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Bank Fees", uv: 4000, female: 2400, male: 2400 },
  { name: "Food and Drink", uv: 3000, female: 1398, male: 2210 },
  { name: "Interest", uv: 2000, female: 9800, male: 2290 },
  { name: "Page D", uv: 2780, female: 3908, male: 2000 },
  { name: "Page E", uv: 1890, female: 4800, male: 2181 },
  { name: "Page F", uv: 2390, female: 3800, male: 2500 },
  { name: "Page G", uv: 3490, female: 4300, male: 2100 },
];

class TransactionsBar extends Component {
  render() {
    return (
      <BarChart
        width={1200}
        height={800}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Bank Fees" stackId="a" fill="#8884d8" />
        <Bar dataKey="Food and Drink" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Interest" fill="#ffc658" />
        <Bar dataKey="Recreation" fill="#ffc658" />
        <Bar dataKey="Service" fill="#ffc658" />
        <Bar dataKey="Shops" fill="#ffc658" />
        <Bar dataKey="Transfer" fill="#ffc658" />
      </BarChart>
    );
  }
}

export default TransactionsBar;
