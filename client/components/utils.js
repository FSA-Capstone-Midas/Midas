import React from "react";
import PieSpending from "./PieSpending";
import PieIncome from "./PieIncome";
import BarSpending from "./BarSpending";
import BarIncome from "./BarIncome";
import BarNetIncome from "./BarNetIncome";

// util function to render charts/bars
const renCompo = (chartComponent, transactionsData) => {
  if (chartComponent === "spendingOverTime") {
    return <BarSpending rows={transactionsData} />;
  } else if (chartComponent === "sepndingByCategory") {
    return <PieSpending rows={transactionsData} />;
  } else if (chartComponent === "incomeOverTime") {
    return <BarIncome rows={transactionsData} />;
  } else if (chartComponent === "incomeByCategory") {
    return <PieIncome rows={transactionsData} />;
  } else if (chartComponent === "netIncomeOverTime") {
    return <BarNetIncome rows={transactionsData} />;
  } else if (chartComponent === "netIncomeByCategory") {
    return <PieIncome rows={transactionsData} />;
  } else if (chartComponent === "netWorthOverTime") {
    return <PieIncome rows={transactionsData} />;
  }
};

export default renCompo;
