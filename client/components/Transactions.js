import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import TransactionsPie from "./TransactionsPie";
import TransactionsBar from "./TransactionsBar";
import { Grid, Segment } from "semantic-ui-react";
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

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
    $("table").tablesort();
  }

  render() {
    console.log("account ", this.props.account); //user account info
    console.log("transaction ", this.props.transaction); //user transaction info
    const { transaction } = this.props;
    const rows = transaction;

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
                ) : rows ? (
                  <div>
                    <Segment>
                      Transactions
                      <Grid.Row id="transactionRow">
                        <Grid.Column>
                          <div className="ui vertical menu">
                            <div className="item">
                              <div className="header">Spending</div>
                              <div className="menu">
                                <a className="item">Over Time</a>
                                <a className="item">By Category</a>
                              </div>
                            </div>
                            <div className="item">
                              <div className="header">Income</div>
                              <div className="menu">
                                <a className="item">Over Time</a>
                                <a className="item">By Category</a>
                              </div>
                            </div>
                            <div className="item">
                              <div className="header">Net Income</div>
                              <div className="menu">
                                <a className="item">Over Time</a>
                              </div>
                            </div>
                          </div>
                        </Grid.Column>
                        <Grid.Column>
                          <TransactionsPie rows={rows} />
                          <TransactionsBar />
                        </Grid.Column>
                      </Grid.Row>
                    </Segment>

                    <table className="ui sortable celled table">
                      <thead>
                        <tr>
                          <th className="">Date</th>
                          <th className="">Name</th>
                          <th className="">Category</th>
                          <th className="sorted ascending">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map(row => {
                          return (
                            <tr key={row.transaction_id}>
                              <td>{row.date}</td>
                              <td>{row.name}</td>
                              <td>{row.category[0]}</td>
                              <td>{row.amount}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : null}
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
    transaction: state.transactions.transaction
  };
};

export default connect(mapState)(Transactions);
