import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment, Grid, Header } from "semantic-ui-react";
import store, {
  updateRent,
  fetchRent,
  fetchPhone,
  updatePhone
} from "../store";

class BillForm extends Component {
  constructor(props) {
    console.log("props!!", props);
    super(props);
    this.state = {
      amount: 0,
      month: "",
      day: "",
      Year: "",
      phoneAmount: 0,
      phoneMonth: "",
      phoneDay: "",
      phoneYear: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    var phoneDate =
      this.state.phoneYear +
      "-" +
      this.state.phoneMonth +
      "-" +
      this.state.phoneDay;
    const { id } = this.props;
    var date = this.state.Year + "-" + this.state.month + "-" + this.state.day;
    const dateResult = {
      price: Number(this.state.amount),
      date: date,
      userId: id
    };
    const phoneResult = {
      price: Number(this.state.phoneAmount),
      date: phoneDate,
      userId: id
    };
    store.dispatch(fetchPhone(id));
    store.dispatch(updatePhone(phoneResult));
    store.dispatch(fetchRent(id));
    store.dispatch(updateRent(dateResult));
  }

  render() {
    const { name } = this.props;
    const startYear = 2000;
    const endYear = 2018;
    const startDay = 1;
    const endDay = 31;
    let arrayYear = [];
    let arrayDay = [];
    for (var i = startYear; i <= endYear; i++) {
      arrayYear.push(i);
    }
    for (var j = startDay; j <= endDay; j++) {
      arrayDay.push(j);
    }
    return (
      <div>
        <Segment id="headerBackground" style={{ padding: "0.7em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.7em", paddingTop: "0.7em" }}
              >
                <h3>Trends</h3>
                <h4>Economics barometer around the country.</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column style={{ marginRight: "30%" }}>
                <div
                  id="signup-login"
                  style={{ display: "-webkit-inline-box", marginLeft: "40%" }}
                >
                  <form
                    className="ui form"
                    onSubmit={this.handleSubmit}
                    name={name}
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      flexWrap: "wrap",
                      padding: "0",
                      margin: "0",
                      justifyContent: "space-around"
                    }}
                  >
                    <Segment
                      style={{
                        padding: "5px",
                        width: "50%",
                        textAlign: "center"
                      }}
                    >
                      <div className="field">
                        <label>Rent bill amount</label>
                        <input
                          placeholder="amount"
                          name="amount"
                          onChange={this.handleChange}
                        />
                      </div>

                      <label>
                        Enter the date of monthly rent bill
                        <div id="dob" style={{ display: "flex" }}>
                          <select
                            name="month"
                            default="month"
                            id="monthddl"
                            onChange={this.handleChange}
                          >
                            <option value="1">January</option>
                            <option value="2">Febuary</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                          <select
                            name="day"
                            id="dayddl"
                            onChange={this.handleChange}
                          >
                            {arrayDay.map(elem => (
                              <option key={`${elem}`} value={`${elem}`}>
                                {elem}
                              </option>
                            ))}
                          </select>

                          <select
                            name="Year"
                            id="Year"
                            onChange={this.handleChange}
                          >
                            {arrayYear.map(item => (
                              <option key={`${item}`} value={`${item}`}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </label>
                    </Segment>
                    <Segment
                      style={{
                        padding: "5px",
                        width: "50%",
                        textAlign: "center",
                        marginTop: "0"
                      }}
                    >
                      <div className="field">
                        <label>Phone bill amount</label>
                        <input
                          placeholder="phoneAmount"
                          name="phoneAmount"
                          onChange={this.handleChange}
                        />
                      </div>

                      <label>
                        Enter the date of monthly phone bill
                        <div id="dob" style={{ display: "flex" }}>
                          <select
                            name="phoneMonth"
                            default="phoneMonth"
                            id="monthddl"
                            onChange={this.handleChange}
                          >
                            <option value="1">January</option>
                            <option value="2">Febuary</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                          <select
                            name="phoneDay"
                            id="dayddl"
                            onChange={this.handleChange}
                          >
                            {arrayDay.map(elem => (
                              <option key={`${elem}`} value={`${elem}`}>
                                {elem}
                              </option>
                            ))}
                          </select>

                          <select
                            name="phoneYear"
                            id="Year"
                            onChange={this.handleChange}
                          >
                            {arrayYear.map(item => (
                              <option key={`${item}`} value={`${item}`}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </label>
                    </Segment>
                    <br />
                    <br />
                    <Segment>
                      <button
                        type="submit"
                        className="ui orange inverted button"
                        role="button"
                      >
                        Submit
                      </button>
                    </Segment>
                  </form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <div
          style={{
            position: "fixed",
            left: "0px",
            bottom: "0px",
            width: "100%",
            textAlign: "center"
          }}
        >
          <Footer />
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    id: state.user.id,
    phone: state.phone,
    bill: state
  };
};

export default connect(mapState)(BillForm);
