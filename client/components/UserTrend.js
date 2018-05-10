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
import renderMap from "./TrendsMapHelper";

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
      currentMap: "avgListingPrice"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleName = this.handleTitleName.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  handleClick(event) {
    const currentMap = event.target.name;
    this.setState({ currentMap });
  }

  handleTitleName() {
    const currentMapTitle = this.state.currentMap;
    console.log(currentMapTitle);
    //house
    const AVG_LISTING_PRICE = "avgListingPrice";
    const MEDIAN_SALES_PRICE = "medianSalesPrice";
    const TRULIA_POPULARITY = "truliaPopularity";

    //Apartment
    const ONE_BED_ROOM_RENT = "1BedRoomRent";
    const TWO_BED_ROOM_RENT = "2BedRoomRent";

    //Apartment % Change
    const APT_MM_CHANGE = "monthlyChange";
    const APT_YY_CHANGE = "yearlyChange";

    switch (currentMapTitle) {
      case AVG_LISTING_PRICE:
        return "USA Housing Average Listing Price";
      case MEDIAN_SALES_PRICE:
        return "USA Housing Median Sales Price";
      case TRULIA_POPULARITY:
        return "USA Housing Trulia Popularity";
      case ONE_BED_ROOM_RENT:
        return "USA Apartment One Bed Room Rent";
      case TWO_BED_ROOM_RENT:
        return "USA Apartment Two Bed Room Rent";
      case APT_MM_CHANGE:
        return "USA Apartment Monthly Change";
      case APT_YY_CHANGE:
        return "USA Apartment Yearly Change";
      default:
        return "USA Housing Average Listing Price";
    }
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
                  <Segment>{this.handleTitleName()} - Year ended 2018</Segment>
                  <Segment>
                    <div className="ui grid">
                      <TrendsMenuBar handleClick={this.handleClick} />
                      <div className="twelve wide column">
                        {renderMap(this.state.currentMap)}
                        {/* <DataMapHousing /> */}
                      </div>
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
