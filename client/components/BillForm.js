import React, { Component } from "react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Segment, Button, Grid, Header } from "semantic-ui-react";
import store, { updateRent, fetchRent } from "../store";
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

class BillForm extends Component {
  constructor(props) {
    console.log("props!!", props);
    super(props);
    this.state = {
      Price: 0,
      month: "",
      day: "",
      Year: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.props;
    var date = this.state.Year + "-" + this.state.month + "-" + this.state.day;
    const dateResult = {
      price: Number(this.state.Price),
      date: date,
      userId: id
    };
    store.dispatch(fetchRent(id));
    store.dispatch(updateRent(dateResult));
  }

  render() {
    const { name, displayName, handleSubmit, error } = this.props;
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
        <Segment id="aboutUsBackground" style={{ padding: "3em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "0.5em" }}
              >
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Sign Up Now
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  {/* <Image avatar src="/assets/images/avatar/large/nan.jpg" /> */}
                  <b>MIDAS</b> OUR APP MAKES MANAGING YOUR MONEY EASY.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <div id="signup-login">
                  <form
                    className="ui form"
                    onSubmit={this.handleSubmit}
                    name={name}
                    style={{ fontSize: "15px" }}
                  >
                    <div className="field">
                      <label>Price</label>
                      <input
                        placeholder="Price"
                        name="Price"
                        onChange={this.handleChange}
                      />
                    </div>

                    <label>
                      Enter the date of monthly rent
                      <div id="dob">
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
                    <br />
                    <button
                      type="submit"
                      className="ui orange inverted button"
                      role="button"
                    >
                      Submit
                    </button>
                    <br />
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
    id: state.user.id
  };
};

export default connect(mapState)(BillForm);
