import React from "react";
import PieSpending from "./PieSpending";
import PieIncome from "./PieIncome";
import BarSpending from "./BarSpending";
import BarIncome from "./BarIncome";
import BarNetIncome from "./BarNetIncome";

// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Confirmation from "./Confirmation";
// import Success from "./Success";

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

// // util function for forms/steps
// export const Fromstep = props => {
//   switch (props.step) {
//     case 1:
//       return (
//         <Step1
//           fieldValues={props.fieldValues}
//           saveValues={props.saveValues}
//           nextStep={props.nextStep}
//         />
//       );
//     case 2:
//       return (
//         <Step2
//           fieldValues={props.fieldValues}
//           saveValues={props.saveValues}
//           previousStep={props.previousStep}
//           nextStep={props.nextStep}
//         />
//       );
//     case 3:
//       return (
//         <Confirmation
//           fieldValues={props.fieldValues}
//           saveValues={props.saveValues}
//           previousStep={props.previousStep}
//           nextStep={props.nextStep}
//         />
//       );
//     case 4:
//       return <Success />;
//   }
// };
