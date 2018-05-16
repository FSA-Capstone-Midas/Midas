/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as AboutUs } from "./BeforeLoginPages/AboutUs";
export { default as HomePage } from "./BeforeLoginPages/HomePage";
export { default as HowItWorks } from "./BeforeLoginPages/HowItWorks";
export { default as Login } from "./BeforeLoginPages/Login";
export { default as SignUp } from "./BeforeLoginPages/SignUp";
export { default as Navbar } from "./navbar";
export { default as UserHome } from "./user-home";
export { default as Profile } from "./Profile";
export { default as UserCredit } from "./UserCredit";
export { default as UserTrend } from "./Trends/UserTrend";
export { default as Transactions } from "./Transactions/Transactions";
export { default as Budget } from "./Budget/Budget";
export { default as BudgetModal } from "./Budget/BudgetModal";
export { default as Retirement } from "./Goals/Retirement";
export { default as RetirementResult } from "./Goals/RetirementResult";
export { default as Goals } from "./Goals/Goals";
export {
  default as SaveForEmergencyMainPage
} from "./Goals/SaveForEmergencyMainPage";
export {
  default as SaveForEmergencyConfirmPage
} from "./Goals/SaveForEmergencyConfirmPage";
export { default as House } from "./Goals/House";
export { default as Bills } from "./Bills";
export { default as BillForm } from "./BillForm";
export { default as BillAlert } from "./BillAlert";
export { default as PhoneAlert } from "./PhoneAlert";
export { default as AddAccount } from "./AddAccount";
export { default as Demo } from "./Demo";

//export { Login, Signup } from "./auth-form";
