import _ from "lodash";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

const apartmentData = {
  AZ: {
    state: "ARIZONA",
    fillKey: "Democrat",
    median1BrRent: "$820",
    median2BrRent: "$1,030",
    MMChange: "0.2%",
    YYChange: "3.4%"
  },
  CO: {
    state: "COLORADO",
    fillKey: "Democrat",
    median1BrRent: "$1,000",
    median2BrRent: "$1,270",
    MMChange: "0.2%",
    YYChange: "2.6%"
  },
  DE: {
    state: "DELAWARE",
    fillKey: "Democrat",
    median1BrRent: "$960",
    median2BrRent: "$1,170",
    MMChange: "-0.1%",
    YYChange: "2.0%"
  },
  FL: {
    state: "FLORIDA",
    fillKey: "UNDECIDED",
    median1BrRent: "$950",
    median2BrRent: "$1,190",
    MMChange: "0.1%",
    YYChange: "3.3%"
  },
  GA: {
    state: "GEORGIA",
    fillKey: "Republican",
    median1BrRent: "$850",
    median2BrRent: "$1,010",
    MMChange: "0.1%",
    YYChange: "3.1%"
  },
  HI: {
    state: "HAWAII",
    fillKey: "Democrat",
    median1BrRent: "$1,480",
    median2BrRent: "$1,940",
    MMChange: "0.5%",
    YYChange: "0%"
  },
  ID: {
    state: "IDAHO",
    fillKey: "Republican",
    median1BrRent: "$640",
    median2BrRent: "$820",
    MMChange: "-0.3%",
    YYChange: "4.2%"
  },
  IL: {
    state: "ILLINOIS",
    fillKey: "Democrat",
    median1BrRent: "$900",
    median2BrRent: "$1,080",
    MMChange: "0%",
    YYChange: "1.0%"
  },
  IN: {
    state: "INDIANA",
    fillKey: "Republican",
    median1BrRent: "$650",
    median2BrRent: "$810",
    MMChange: "0%",
    YYChange: "1.8%"
  },
  IA: {
    state: "IOWA",
    fillKey: "Light Democrat",
    median1BrRent: "$610",
    median2BrRent: "$780",
    MMChange: "-0.2%",
    YYChange: "0.7%"
  },
  KS: {
    state: "KANSAS",
    fillKey: "Republican",
    median1BrRent: "$650",
    median2BrRent: "$840",
    MMChange: "0.2%",
    YYChange: "1.6%"
  },
  KY: {
    state: "KENTUCKY",
    fillKey: "Republican",
    median1BrRent: "$600",
    median2BrRent: "$770",
    MMChange: "0.1%",
    YYChange: "0%"
  },
  LA: {
    state: "LOUISIANA",
    fillKey: "Republican",
    median1BrRent: "$700",
    median2BrRent: "$840",
    MMChange: "0.4%",
    YYChange: "1.0%"
  },
  MD: {
    state: "MARYLAND",
    fillKey: "Democrat",
    median1BrRent: "$1,220",
    median2BrRent: "$1,480",
    MMChange: "-0.1%",
    YYChange: "0.9%"
  },
  ME: {
    state: "MAINE",
    fillKey: "Democrat",
    median1BrRent: "$780",
    median2BrRent: "$970",
    MMChange: "-0.5%",
    YYChange: "1.5%"
  },
  MA: {
    state: "MASSACHUSETTS",
    fillKey: "Democrat",
    median1BrRent: "$1,270",
    median2BrRent: "$1,580",
    MMChange: "0.7%",
    YYChange: "2.7%"
  },
  MN: {
    state: "MINNESOTA",
    fillKey: "Democrat",
    median1BrRent: "$840",
    median2BrRent: "$1,060",
    MMChange: "0.3%",
    YYChange: "3.0%"
  },
  MI: {
    state: "MICHIGAN",
    fillKey: "Democrat",
    median1BrRent: "$710",
    median2BrRent: "$910",
    MMChange: "-0.1%",
    YYChange: "2.1%"
  },
  MS: {
    state: "MISSISSIPPI",
    fillKey: "Republican",
    median1BrRent: "$650",
    median2BrRent: "$800",
    MMChange: "-0.1%",
    YYChange: "2.1%"
  },
  MO: {
    state: "MISSOURI",
    fillKey: "Republican",
    median1BrRent: "$660",
    median2BrRent: "$840",
    MMChange: "-0.2%",
    YYChange: "0.8%"
  },
  MT: {
    state: "MONTANA",
    fillKey: "Republican",
    median1BrRent: "$620",
    median2BrRent: "$780",
    MMChange: "0.3%",
    YYChange: "2.2%"
  },
  NC: {
    state: "NORTH CAROLINA",
    fillKey: "Light Republican",
    median1BrRent: "$730",
    median2BrRent: "$880",
    MMChange: "0.1%",
    YYChange: "2.3%"
  },
  NE: {
    state: "NEBRASKA",
    fillKey: "Republican",
    median1BrRent: "$640",
    median2BrRent: "$820",
    MMChange: "0.1%",
    YYChange: "1.3%"
  },
  NV: {
    state: "NEVADA",
    fillKey: "Heavy Democrat",
    median1BrRent: "$860",
    median2BrRent: "$1,080",
    MMChange: "0.3%",
    YYChange: "4.6%"
  },
  NH: {
    state: "NEW HAMPSHIRE",
    fillKey: "Light Democrat",
    median1BrRent: "$1,010",
    median2BrRent: "$1,290",
    MMChange: "0%",
    YYChange: "2.2%"
  },
  NJ: {
    state: "NEW JERSEY",
    fillKey: "Democrat",
    median1BrRent: "$1,230",
    median2BrRent: "$1,510",
    MMChange: "0.2%",
    YYChange: "1.4%"
  },
  NY: {
    state: "NEW YORK",
    fillKey: "Very High",
    median1BrRent: "$1,260",
    median2BrRent: "$1,500",
    MMChange: "0%",
    YYChange: "0.7%"
  },
  ND: {
    state: "NORTH DAKOTA",
    fillKey: "Republican",
    median1BrRent: "$610",
    median2BrRent: "$780",
    MMChange: "-0.6%",
    YYChange: "-0.5%"
  },
  NM: {
    state: "NEW MEXICO",
    fillKey: "Democrat",
    median1BrRent: "$660",
    median2BrRent: "$820",
    MMChange: "0.4%",
    YYChange: "2.5%"
  },
  OH: {
    state: "OHIO",
    fillKey: "UNDECIDED",
    median1BrRent: "$650",
    median2BrRent: "$840",
    MMChange: "0%",
    YYChange: "1.6%"
  },
  OK: {
    state: "OKLAHOMA",
    fillKey: "Republican",
    median1BrRent: "$600",
    median2BrRent: "$770",
    MMChange: "-0.1%",
    YYChange: "0%"
  },
  OR: {
    state: "OREGON",
    fillKey: "Democrat",
    median1BrRent: "$990",
    median2BrRent: "$1,210",
    MMChange: "0.7%",
    YYChange: "0.9%"
  },
  PA: {
    state: "PENNSYLVANIA",
    fillKey: "Democrat",
    median1BrRent: "$820",
    median2BrRent: "$1,010",
    MMChange: "-0.2%",
    YYChange: "1.7%"
  },
  RI: {
    state: "RHODE ISLAND",
    fillKey: "Democrat",
    median1BrRent: "$950",
    median2BrRent: "$1,150",
    MMChange: "-0.9%",
    YYChange: "2.0%"
  },
  SC: {
    state: "SOUTH CAROLINA",
    fillKey: "Republican",
    median1BrRent: "$760",
    median2BrRent: "$910",
    MMChange: "0.1%",
    YYChange: "2.0%"
  },
  SD: {
    state: "SOUTH DAKOTA",
    fillKey: "Republican",
    median1BrRent: "$560",
    median2BrRent: "$720",
    MMChange: "0.2%",
    YYChange: "1.2%"
  },
  TN: {
    state: "TENNESSEE",
    fillKey: "Republican",
    median1BrRent: "$690",
    median2BrRent: "$850",
    MMChange: "0%",
    YYChange: "1.7%"
  },
  TX: {
    state: "TEXAS",
    fillKey: "Republican",
    median1BrRent: "$830",
    median2BrRent: "$1,040",
    MMChange: "-0.1%",
    YYChange: "2.3%"
  },
  UT: {
    state: "UTAH",
    fillKey: "Republican",
    median1BrRent: "$790",
    median2BrRent: "$970",
    MMChange: "0%",
    YYChange: "4.3%"
  },
  WI: {
    state: "WISCONSIN",
    fillKey: "Democrat",
    median1BrRent: "$670",
    median2BrRent: "$850",
    MMChange: "0%",
    YYChange: "0.9%"
  },
  VA: {
    state: "VIRGINIA",
    fillKey: "Light Democrat",
    median1BrRent: "$1,030",
    median2BrRent: "$1,220",
    MMChange: "0.2%",
    YYChange: "1.4%"
  },
  VT: {
    state: "VERMONT",
    fillKey: "Democrat",
    median1BrRent: "$970",
    median2BrRent: "$1,220",
    MMChange: "-0.2%",
    YYChange: "1.9%"
  },
  WA: {
    state: "WASHINGTON",
    fillKey: "Democrat",
    median1BrRent: "$1,140",
    median2BrRent: "$1,430",
    MMChange: "-0.8%",
    YYChange: "3.5%"
  },
  WV: {
    state: "WEST VIRGINIA",
    fillKey: "Republican",
    median1BrRent: "$600",
    median2BrRent: "$730",
    MMChange: "-0.4%",
    YYChange: "-1.5%"
  },
  WY: {
    state: "WYOMING",
    fillKey: "Republican",
    median1BrRent: "$610",
    median2BrRent: "$780",
    MMChange: "0.2%",
    YYChange: "-1.1%"
  },
  CA: {
    state: "CALIFORNIA",
    fillKey: "Democrat",
    median1BrRent: "$1,430",
    median2BrRent: "$1,830",
    MMChange: "0.2%",
    YYChange: "3.6%"
  },
  CT: {
    state: "CONNECTICUT",
    fillKey: "Democrat",
    median1BrRent: "$1070",
    median2BrRent: "$1,350",
    MMChange: "0.2%",
    YYChange: "1.3%"
  },
  AK: {
    state: "ALASKA",
    fillKey: "Republican",
    median1BrRent: "$930",
    median2BrRent: "$1,190",
    MMChange: "-0.3%",
    YYChange: "-1.0%"
  },
  AR: {
    state: "ARKANSAS",
    fillKey: "Republican",
    median1BrRent: "$570",
    median2BrRent: "$720",
    MMChange: "0.1%",
    YYChange: "3.4%"
  },
  AL: {
    state: "ALABAMA",
    fillKey: "Republican",
    median1BrRent: "$650",
    median2BrRent: "$790",
    MMChange: "-0.5%",
    YYChange: "0.6%"
  }
};

export default class TrendsApartmentTable extends Component {
  state = {
    column: null,
    data: apartmentData,
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
              sorted={column === "median1BrRent" ? direction : null}
              onClick={this.handleSort("median1BrRent")}
            >
              Median 1 Bed Room Rent
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "median2BrRent" ? direction : null}
              onClick={this.handleSort("median2BrRent")}
            >
              Median 2 Bed Room Rent
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "MMChange" ? direction : null}
              onClick={this.handleSort("MMChange")}
            >
              MM Change
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "YYChange" ? direction : null}
              onClick={this.handleSort("YYChange")}
            >
              YY Change
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({ median1BrRent, median2BrRent, MMChange, YYChange, state }) => (
              <Table.Row key={state}>
                <Table.Cell>{state}</Table.Cell>
                <Table.Cell>{median1BrRent}</Table.Cell>
                <Table.Cell>{median2BrRent}</Table.Cell>
                <Table.Cell>{MMChange}</Table.Cell>
                <Table.Cell>{YYChange}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    );
  }
}
