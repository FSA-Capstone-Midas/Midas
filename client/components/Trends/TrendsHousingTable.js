import _ from "lodash";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

const housingData = {
  AZ: {
    state: "ARIZONA",
    avergeListingPrice: "$322,398",
    mediumSalesPrice: "$225,000",
    popularity: 15
  },
  CO: {
    state: "COLORADO",
    avergeListingPrice: "$538,477",
    mediumSalesPrice: "$331,000",
    popularity: 19
  },
  DE: {
    state: "DELAWARE",
    avergeListingPrice: "$303,907",
    mediumSalesPrice: "$210,000",
    popularity: 44
  },
  FL: {
    state: "FLORIDA",
    avergeListingPrice: "$406,803",
    mediumSalesPrice: "$218,000",
    popularity: 3
  },
  GA: {
    state: "GEORGIA",
    avergeListingPrice: "$296,535",
    mediumSalesPrice: "$193,000",
    popularity: 14
  },
  HI: {
    state: "HAWAII",
    avergeListingPrice: "$905,687",
    mediumSalesPrice: "$442,500",
    popularity: 49
  },
  ID: {
    state: "IDAHO",
    avergeListingPrice: "$349,000",
    mediumSalesPrice: "-",
    popularity: 25
  },
  IL: {
    state: "ILLINOIS",
    avergeListingPrice: "$277,163",
    mediumSalesPrice: "$212,000",
    popularity: 39
  },
  IN: {
    state: "INDIANA",
    avergeListingPrice: "$190,843",
    mediumSalesPrice: "-",
    popularity: 28
  },
  IA: {
    state: "IOWA",
    avergeListingPrice: "$185,087",
    mediumSalesPrice: "$157,000",
    popularity: 47
  },
  KS: {
    state: "KANSAS",
    avergeListingPrice: "$187,649",
    mediumSalesPrice: "-",
    popularity: 32
  },
  KY: {
    state: "KENTUCKY",
    avergeListingPrice: "$213,848",
    mediumSalesPrice: "$170,000",
    popularity: 26
  },
  LA: {
    state: "LOUISIANA",
    avergeListingPrice: "232,610",
    mediumSalesPrice: "-",
    popularity: 41
  },
  MD: {
    state: "MARYLAND",
    avergeListingPrice: "$275,717",
    mediumSalesPrice: "-",
    popularity: 27
  },
  ME: {
    state: "MAINE",
    avergeListingPrice: "$367,454",
    mediumSalesPrice: "$290,000",
    popularity: 33
  },
  MA: {
    state: "MASSACHUSETTS",
    avergeListingPrice: "$602,210",
    mediumSalesPrice: "$379,000",
    popularity: 7
  },
  MN: {
    state: "MINNESOTA",
    avergeListingPrice: "$212,694",
    mediumSalesPrice: "$164,000",
    popularity: 11
  },
  MI: {
    state: "MICHIGAN",
    avergeListingPrice: "$290,514",
    mediumSalesPrice: "$240,000",
    popularity: 42
  },
  MS: {
    state: "MISSISSIPPI",
    avergeListingPrice: "$195,390",
    mediumSalesPrice: "-",
    popularity: 38
  },
  MO: {
    state: "MISSOURI",
    avergeListingPrice: "$204,506",
    mediumSalesPrice: "-",
    popularity: 30
  },
  MT: {
    state: "MONTANA",
    avergeListingPrice: "$314,959",
    mediumSalesPrice: "-",
    popularity: 35
  },
  NC: {
    state: "NORTH CAROLINA",
    avergeListingPrice: "$276,389",
    mediumSalesPrice: "$210,000",
    popularity: 13
  },
  NE: {
    state: "NEBRASKA",
    avergeListingPrice: "$230,000",
    mediumSalesPrice: "$178,000",
    popularity: 43
  },
  NV: {
    state: "NEVADA",
    avergeListingPrice: "$331,971",
    mediumSalesPrice: "$249,000",
    popularity: 8
  },
  NH: {
    state: "NEW HAMPSHIRE",
    avergeListingPrice: "$310,914",
    mediumSalesPrice: "$245,000",
    popularity: 34
  },
  NJ: {
    state: "NEW JERSEY",
    avergeListingPrice: "$372,916",
    mediumSalesPrice: "$290,000",
    popularity: 12
  },
  NY: {
    state: "NEW YORK",
    avergeListingPrice: "$565,227",
    mediumSalesPrice: "$430,000",
    popularity: 4
  },
  ND: {
    state: "NORTH DAKOTA",
    avergeListingPrice: "$226,863",
    mediumSalesPrice: "-",
    popularity: 50
  },
  NM: {
    state: "NEW MEXICO",
    avergeListingPrice: "$254,798",
    mediumSalesPrice: "-",
    popularity: 21
  },
  OH: {
    state: "OHIO",
    avergeListingPrice: "$190,371",
    mediumSalesPrice: "$154,900",
    popularity: 24
  },
  OK: {
    state: "OKLAHOMA",
    avergeListingPrice: "$201,091",
    mediumSalesPrice: "$150,000",
    popularity: 23
  },
  OR: {
    state: "OREGON",
    avergeListingPrice: "$416,718",
    mediumSalesPrice: "$315,000",
    popularity: 20
  },
  PA: {
    state: "PENNSYLVANIA",
    avergeListingPrice: "$224,090",
    mediumSalesPrice: "$191,000",
    popularity: 6
  },
  RI: {
    state: "RHODE ISLAND",
    avergeListingPrice: "$405,450",
    mediumSalesPrice: "$256,000",
    popularity: 45
  },
  SC: {
    state: "SOUTH CAROLINA",
    avergeListingPrice: "$291,636",
    mediumSalesPrice: "$181,500",
    popularity: 18
  },
  SD: {
    state: "SOUTH DAKOTA",
    avergeListingPrice: "$238,163",
    mediumSalesPrice: "$177,500",
    popularity: 48
  },
  TN: {
    state: "TENNESSEE",
    avergeListingPrice: "$268,692",
    mediumSalesPrice: "$190,000",
    popularity: 9
  },
  TX: {
    state: "TEXAS",
    avergeListingPrice: "$320,060",
    mediumSalesPrice: "$-",
    popularity: 2
  },
  UT: {
    state: "UTAH",
    avergeListingPrice: "$440,946",
    mediumSalesPrice: "-",
    popularity: 29
  },
  WI: {
    state: "WISCONSIN",
    avergeListingPrice: "$223,480",
    mediumSalesPrice: "$197,000",
    popularity: 40
  },
  VA: {
    state: "VIRGINIA",
    avergeListingPrice: "341,015",
    mediumSalesPrice: "$297,500",
    popularity: 5
  },
  VT: {
    state: "VERMONT",
    avergeListingPrice: "$306,034",
    mediumSalesPrice: "$332,719",
    popularity: 46
  },
  WA: {
    state: "WASHINGTON",
    avergeListingPrice: "$378,575",
    mediumSalesPrice: "$332,719",
    popularity: 17
  },
  WV: {
    state: "WEST VIRGINIA",
    avergeListingPrice: "$174,865",
    mediumSalesPrice: "$136,500",
    popularity: 37
  },
  WY: {
    state: "WYOMING",
    avergeListingPrice: "$291,855",
    mediumSalesPrice: "$-",
    popularity: 36
  },
  CA: {
    state: "CALIFORNIA",
    avergeListingPrice: "$697,539",
    mediumSalesPrice: "$462,000",
    popularity: 1
  },
  CT: {
    state: "CONNECTICUT",
    avergeListingPrice: "$435,858",
    mediumSalesPrice: "$253,500",
    popularity: 22
  },
  AK: {
    state: "ALASKA",
    avergeListingPrice: "$267,404",
    mediumSalesPrice: "$-",
    popularity: 31
  },
  AR: {
    state: "ARKANSAS",
    avergeListingPrice: "$191,446",
    mediumSalesPrice: "$156,000",
    popularity: 16
  },
  AL: {
    state: "ALABAMA",
    avergeListingPrice: "$212,733",
    mediumSalesPrice: "$171,500",
    popularity: 10
  }
};

export default class TrendsHousingTable extends Component {
  state = {
    column: null,
    data: housingData,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "state" ? direction : null}
              onClick={this.handleSort("state")}
            >
              State
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "avergeListingPrice" ? direction : null}
              onClick={this.handleSort("avergeListingPrice")}
            >
              Housing Average Listing Price
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "mediumSalesPrice" ? direction : null}
              onClick={this.handleSort("mediumSalesPrice")}
            >
              Housing Median Sales Price
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "popularity" ? direction : null}
              onClick={this.handleSort("popularity")}
            >
              Trulia Popularity
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({ avergeListingPrice, mediumSalesPrice, popularity, state }) => (
              <Table.Row key={popularity}>
                <Table.Cell>{state}</Table.Cell>
                <Table.Cell>{avergeListingPrice}</Table.Cell>
                <Table.Cell>{mediumSalesPrice}</Table.Cell>
                <Table.Cell>{popularity}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    );
  }
}
