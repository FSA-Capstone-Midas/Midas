import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import TransactionsPie from "./TransactionsPie";
import TransactionsBar from "./TransactionsBar";
import RC2 from "react-chartjs2";
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
  Visibility,
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
  children: PropTypes.node,
};

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
    const rows = transaction.transaction;

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
                    <Segment>Transactions</Segment>
                    <TransactionsPie rows={rows} />
                    <TransactionsBar />

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
                      {/* <tfoot>
                      <tr>
                        <th>3 People</th>
                        <th>2 Approved</th>
                        <th />
                        <th />
                      </tr>
                    </tfoot> */}
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
    account: state.plaid.account,
    transaction: state.plaid.transaction,
  };
};

export default connect(mapState)(Transactions);
