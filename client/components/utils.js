import React from "react";
import PieSpending from "./Transactions/PieSpending";
import PieIncome from "./Transactions/PieIncome";
import BarSpending from "./Transactions/BarSpending";
import BarIncome from "./Transactions/BarIncome";
import BarNetIncome from "./Transactions/BarNetIncome";

// util function to render charts/bars
export const renCompo = (chartComponent, transactionsData) => {
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

/**
 * @package    Radiobox-Value
 * @author     Tommy Marshall <tommy.marshall@viget.com>
 * @copyright  2015 Tommy Marshall
 */

/**
 * @param document node
 * @return string|array
 */

export const getRadioOrCheckboxValue = el => {
  var values = [];

  if (!el) return null;

  if (typeof el.length == "undefined") return el.checked ? el.value : null;

  for (var i = 0; i < el.length; i++) {
    el[i].checked && values.push(el[i].value);
  }

  return values;
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
