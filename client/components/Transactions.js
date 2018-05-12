import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Loading from "./Loading";
import SideBar from "./SideBar";
import Table from "./Table";
import { renCompo } from "./utils";
import { Grid, Segment, Container } from "semantic-ui-react";
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
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  handleClick(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ currentChart: name });
  }

  render() {
    const { transaction } = this.props;
    const rows = transaction;

    return (
      <ResponsiveContainer>
        <Container>
          <Segment>
            <Segment id="howItWorksBackground" vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "0.5em", paddingTop: "2em" }}
                  >
                    {this.state.loading ? (
                      <Loading />
                    ) : rows ? (
                      <div>
                        <Segment style={{ fontSize: "28px" }}>
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
          </Segment>
        </Container>

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
