import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../Footer";
import {
  Segment,
  Form,
  Input,
  Button,
  Icon,
  Statistic,
} from "semantic-ui-react";
import DesktopContainer from "../AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "../AfterLogin/AfterLoginMobileContainer";
import { addHouseFormdetails, addHousePlan } from "../../store";
import { numberWithCommas } from "../utils";
/*eslint-disable*/

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
    };
    this.handleChangeLocal = this.handleChangeLocal.bind(this);
  }
  handleChangeLocal() {
    this.setState({ showResult: true });
  }
  render() {
    const { handleChange, handleSubmit, userId, houseForm } = this.props;
    const housePlan = Object.assign({}, { userId }, houseForm);
    const aggressivePrice = Math.floor(houseForm.annualIncome * 6);
    const downpaymentAggresive = Math.floor(
      aggressivePrice * (houseForm.percentDownPayment / 100)
    );
    const monthlyAggresive = Math.floor(
      (aggressivePrice - downpaymentAggresive) *
        Math.pow(1 + houseForm.mortgageRate / 100, 30) /
        360
    );

    return (
      <ResponsiveContainer>
        <Segment
          id="howItWorksBackground"
          style={{ padding: '1.5em' }}
          vertical
        >
          <i aria-hidden="true" className="home massive icon" />
          <h4>Buy a Home</h4>
          <div className="ui divider" />
          <h5>How much can I afford?</h5>
          <br />
          <Form className="ui huge">
            <Form.Group>
              <Form.Field
                control={Input}
                label="Annual Income $:"
                name="annualIncome"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Mortgage Rate( average 30-year fixed rate is 4.04%)"
                name="mortgageRate"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Percent Down Payment"
                name="percentDownPayment"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Annual Insurance $:"
                name="annualInsurance"
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Annual Property Tax(national averge is 1%)"
                name="annualPropertyTax"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <Button
            className="ui large secondary button"
            onClick={event => {
              handleSubmit(event, housePlan);
              this.handleChangeLocal();
            }}
          >
            Estimate
          </Button>

          <div className="ui divider" />
          {this.state.showResult ? (
            <div className="ui huge">
              <h5>How much will I need?</h5>
              <p>You can afford a home that costs </p>
              <Statistic color="teal">
                <Statistic.Value>
                  ${`${numberWithCommas(aggressivePrice)}`}
                </Statistic.Value>
              </Statistic>
              <p>for a total monthly payment of</p>
              <Statistic color="teal">
                <Statistic.Value>
                  ${`${numberWithCommas(monthlyAggresive)}`}
                </Statistic.Value>
              </Statistic>
              <p>You will need a down payment of</p>
              <Statistic color="teal">
                <Statistic.Value>
                  ${`${numberWithCommas(downpaymentAggresive)}`}
                </Statistic.Value>
              </Statistic>
              <br />
            </div>
          ) : null}

          <NavLink to="/goals">
            <Button icon className="ui large button" labelPosition="right">
              Save the Goal
              <Icon name="right arrow" />
            </Button>
          </NavLink>
        </Segment>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    houseForm: state.houseForm,
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(event) {
      dispatch(
        addHouseFormdetails({ [event.target.name]: +event.target.value })
      );
    },
    handleSubmit(event, housePlan) {
      event.preventDefault();
      dispatch(addHousePlan(housePlan));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(House);
