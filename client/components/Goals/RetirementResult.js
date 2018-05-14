import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../Footer";
import Loading from "../Loading";
import { Grid, Segment } from "semantic-ui-react";
import DesktopContainer from "../AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "../AfterLogin/AfterLoginMobileContainer";
import { ResponsiveStream } from "@nivo/stream";
import RetirementTable from "./RetirementTable";
import { fetchRetirementDetails } from "../../store";

const createData = retirement => {
  const result = [];
  const {
    birthyear,
    earnEachYear,
    martialStatus,
    monthlyRetirementSpending,
    retirementage,
    saveEachYear,
    savedSoFar,
  } = retirement;

  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - birthyear;
  const deathYear = 95;
  let num = 0;
  for (let i = currentAge; i <= deathYear; i++) {
    if (i === currentAge) {
      const avgMarket = savedSoFar;
      const poorMarket = savedSoFar;
      const goodMarket = savedSoFar;
      const beginningSaving = saveEachYear;
      result.push({
        year: num,
        age: i,
        "Average Market": avgMarket,
        "Poor Market": poorMarket,
        "Good Market": goodMarket,
        savingOrSpending: beginningSaving,
        cashFlow:
          martialStatus === "single" ? beginningSaving : beginningSaving,
      });
      num++;
    } else if (i > currentAge && i < retirementage) {
      const avgMarket =
        (result[num - 1]["Average Market"] + result[num - 1].cashFlow) * 1.07;
      const poorMarket =
        (result[num - 1]["Poor Market"] + result[num - 1].cashFlow) * 1.03;
      const goodMarket =
        (result[num - 1]["Good Market"] + result[num - 1].cashFlow) * 1.1;
      const beginningSaving = saveEachYear;
      result.push({
        year: num,
        age: i,
        "Average Market": Math.round(avgMarket, 0),
        "Poor Market": Math.round(poorMarket, 0),
        "Good Market": Math.round(goodMarket, 0),
        savingOrSpending: Math.round(beginningSaving, 0),
        cashFlow:
          martialStatus === "single"
            ? Math.round(beginningSaving, 0)
            : Math.round(beginningSaving, 0),
      });
      num++;
    } else {
      const avgMarket =
        (result[num - 1]["Average Market"] + result[num - 1].cashFlow) * 1.07;
      const poorMarket =
        (result[num - 1]["Poor Market"] + result[num - 1].cashFlow) * 1.03;
      const goodMarket =
        (result[num - 1]["Good Market"] + result[num - 1].cashFlow) * 1.1;

      const beginningSaving = -monthlyRetirementSpending * 12;

      result.push({
        year: num,
        age: i,
        "Average Market": Math.round(avgMarket),
        "Poor Market": Math.round(poorMarket),
        "Good Market": Math.round(goodMarket),
        savingOrSpending: Math.round(beginningSaving),
        cashFlow:
          martialStatus === "single"
            ? Math.round(beginningSaving)
            : Math.round(beginningSaving * 1.2),
      });
      num++;
    }
  }
  return result;
};

const keys = ["Average Market", "Poor Market", "Good Market"];

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class RetirementResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
    this.props.fetchRetirementDetails(this.props.user.id);
  }

  render() {
    const objWithAllProperty = createData(this.props.retirement);

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
                    <div style={{ height: 400 }}>
                      <h2>Retirement Analysis</h2>
                      <ResponsiveStream
                        data={objWithAllProperty}
                        keys={keys}
                        margin={{
                          top: 50,
                          right: 110,
                          bottom: 50,
                          left: 60,
                        }}
                        axisBottom={{
                          orient: "bottom",
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "",
                          legendOffset: 36,
                        }}
                        axisLeft={{
                          orient: "left",
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: "",
                          legendOffset: -40,
                        }}
                        curve="natural"
                        offsetType="none"
                        fillOpacity={0.8}
                        borderColor="#000"
                        defs={[
                          {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: "#2c998f",
                            size: 4,
                            padding: 2,
                            stagger: true,
                          },
                          {
                            id: "squares",
                            type: "patternSquares",
                            background: "inherit",
                            color: "#e4c912",
                            size: 6,
                            padding: 2,
                            stagger: true,
                          },
                        ]}
                        fill={[
                          {
                            match: {
                              id: "Paul",
                            },
                            id: "dots",
                          },
                          {
                            match: {
                              id: "Marcel",
                            },
                            id: "squares",
                          },
                        ]}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        legends={[
                          {
                            anchor: "bottom-right",
                            direction: "column",
                            translateX: 100,
                            itemWidth: 80,
                            itemHeight: 20,
                            symbolSize: 12,
                            symbolShape: "circle",
                          },
                        ]}
                      />
                    </div>
                    <RetirementTable
                      retirement={this.props.retirement}
                      objWithAllProperty={objWithAllProperty}
                    />
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
    account: state.accounts.accountInfo,
    transaction: state.transactions.transaction,
    form: state.form,
    user: state.user,
    retirement: state.retirement,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRetirementDetails: userId => dispatch(fetchRetirementDetails(userId)),
  };
}

export default connect(mapState, mapDispatchToProps)(RetirementResult);
