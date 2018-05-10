import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import { Grid, Segment } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";
import Loading from "./Loading";
import TrendsMenuBar from "./TrendsMenuBar";
import DataMapHousing from "./DataMapHousing";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class UserTrend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentComponent: "null"
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    return (
      <ResponsiveContainer>
        <Segment style={{ padding: "1.5em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "2em" }}
              >
                <div>
                  <Segment>Average Housing Price - Year ended 2018</Segment>
                  <Segment>
                    <div className="ui grid">
                      <TrendsMenuBar />
                      <div className="twelve wide column">
                        <DataMapHousing />
                      </div>
                      {/* <DataMapApartments /> */}
                      {/* <DataMapApartments2Br /> */}
                      {/* <DataMapApartmentsMMRentChange /> */}
                      {/* <DataMapApartmentYYRentChange /> */}
                    </div>
                  </Segment>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer />
        </Segment>
      </ResponsiveContainer>
    );
  }
}

export default UserTrend;
