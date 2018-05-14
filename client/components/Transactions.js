import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import SideBar from "./SideBar";
import BillAlert from "./BillAlert";
import Table from "./Table";
import { renCompo } from "./utils";
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
      loading: true,
      currentChart: "spendingOverTime"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  handleClick(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ currentChart: name });
  }

  render() {
    // console.log("account ", this.props.account); //user account info
    // console.log("transaction ", this.props.transaction); //user transaction info
    const { transaction } = this.props;
    console.log("!?!?!?!", this.props.state);
    const rows = transaction;

    return (
      <ResponsiveContainer>
        <Segment
          id="howItWorksBackground"
          style={{ padding: "1.5em", marginLeft: "15%", marginRight: "15%" }}
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
                    <Segment
                      style={{
                        fontSize: "28px",
                        backgroundColor: "powderblue"
                      }}
                    >
                      Transactions
                    </Segment>
                    <div className="ui grid">
                      <SideBar handleClick={this.handleClick} />
                      <div className="twelve wide column">
                        {renCompo(this.state.currentChart, rows)}
                      </div>
                    </div>
                    <Table rows={rows} />
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
    state: state,
    account: state.accounts.accountInfo,
    transaction: state.transactions.transaction
  };
};

export default connect(mapState)(Transactions);
