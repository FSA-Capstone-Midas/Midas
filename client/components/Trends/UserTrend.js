import PropTypes from "prop-types";
import React, { Component } from "react";
import Footer from "../Footer";
import { Grid, Segment, Container } from "semantic-ui-react";
import DesktopContainer from "../AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "../AfterLogin/AfterLoginMobileContainer";
import Loading from "../Loading";
import TrendsMenuBar from "./TrendsMenuBar";
import renderMap from "./TrendsMapHelper";
import TrendsHousingTable from "./TrendsHousingTable";
import TrendsApartmentTable from "./TrendsApartmentTable";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

class UserTrend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentMap: "avgListingPrice",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleName = this.handleTitleName.bind(this);
    this.handleTable = this.handleTable.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 500);
  }

  handleClick(event) {
    const currentMap = event.target.name;
    this.setState({ currentMap });
  }

  handleTitleName() {
    const currentMapTitle = this.state.currentMap;
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

  handleTable() {
    const currentMapTitle = this.state.currentMap;
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
        return <TrendsHousingTable />;
      case MEDIAN_SALES_PRICE:
        return <TrendsHousingTable />;
      case TRULIA_POPULARITY:
        return <TrendsHousingTable />;
      case ONE_BED_ROOM_RENT:
        return <TrendsApartmentTable />;
      case TWO_BED_ROOM_RENT:
        return <TrendsApartmentTable />;
      case APT_MM_CHANGE:
        return <TrendsApartmentTable />;
      case APT_YY_CHANGE:
        return <TrendsApartmentTable />;
      default:
        return <TrendsHousingTable />;
    }
  }

  render() {
    return (
      <ResponsiveContainer>
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
        <Container id="mainContent">
          {this.state.loading ? (
            <Loading />
          ) : (
            <Segment
              style={{
                padding: "2em 0em",
                fontSize: "12px",
                textAlign: "center",
              }}
              vertical
            >
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{
                      paddingBottom: "0.5em",
                      paddingTop: "0.5em",
                    }}
                  >
                    <h5>{this.handleTitleName()} - Year ended 2018</h5>
                  </Grid.Column>
                </Grid.Row>

                <Segment
                  style={{
                    padding: "2em 0em",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                  vertical
                >
                  <div className="ui grid">
                    <TrendsMenuBar handleClick={this.handleClick} />
                    <div className="twelve wide column">
                      {renderMap(this.state.currentMap)}
                    </div>
                  </div>
                  {this.handleTable()}
                </Segment>
              </Grid>
            </Segment>
          )}
        </Container>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

export default UserTrend;
