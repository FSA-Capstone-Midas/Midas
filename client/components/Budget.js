import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import HorizontalBarChart from "./HorizontalBarChart";
import BudgetInput from "./BudgetInput";
import BudgetModal from "./BudgetModal";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showBudgetInput: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
    $("table").tablesort();
  }
  handleClick(event) {
    event.preventDefault();
    this.setState({ showBudgetInput: !this.state.showBudgetInput });
  }
  render() {
    return (
      <ResponsiveContainer>
        <Segment
          id="howItWorksBackground"
          style={{ padding: "1.5em" }}
          vertical
        >
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "2em" }}
              >
                {this.state.loading ? (
                  <Loading />
                ) : (
                  <div>
                    <Segment>
                      <div className="ui left aligned segment">
                        <button
                          className="ui button"
                          role="button"
                          onClick={this.handleClick}
                        >
                          <i aria-hidden="true" className="add icon" />Create a
                          Budget
                        </button>
                        {this.state.showBudgetInput ? <BudgetInput /> : null}
                      </div>
                      <BudgetModal />
                      <HorizontalBarChart />
                    </Segment>
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapState = state => {
  return {
    account: state.plaid.account,
    transaction: state.plaid.transaction
  };
};
// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();
//       dispatch(auth(email, password, formName, firstName, lastName));
//     }
//   };
// };

export default connect(mapState)(Budget);
