import PropTypes from "prop-types";
import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import Footer from "./Footer";
import SaveForEmergency from "./SaveForEmergency";
import SaveForEmergenyConfirmPage from "./SaveForEmergencyConfirmPage";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class SaveForEmergencyMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseGoal: 0,
      enteredExpense: false
    };
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage(expenseGoal, enteredExpense) {
    this.setState({ expenseGoal, enteredExpense });
  }

  render() {
    return (
      <ResponsiveContainer>
        {!this.state.enteredExpense ? (
          <SaveForEmergency handlePage={this.handlePage} />
        ) : (
          <SaveForEmergenyConfirmPage />
        )}
        <Footer />
      </ResponsiveContainer>
    );
  }
}

export default SaveForEmergencyMainPage;
