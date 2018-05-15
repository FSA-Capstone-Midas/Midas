import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA housing map
class DataMapHousing extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_average_listing"),
      responsive: true,
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function(geography, data) {
          return (
            "<div class=\"hoverinfo\">" +
            geography.properties.name +
            "</br>" +
            "Average Listing Price: " +
            data.avergeListingPrice +
            " "
          );
        },
        highlightBorderWidth: 6
      },
      // geographyConfig: {
      //   popupOnHover: true,
      //   highlightOnHover: true
      // },

      fills: {
        "Very High": "#ff6a00",
        High: "#ff1a1a",
        "Relative High": "#FF6666",
        Low: "#ff9999",
        "Relative Low": "#ffcccc",
        "Very Low": "#ffc282",
        Medium: "#ffa366",
        defaultFill: "#EDDC4E",
        "New York": "#ff5347"
      },
      data: {
        AZ: {
          fillKey: "Medium",
          avergeListingPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        CO: {
          fillKey: "Very High",
          avergeListingPrice: "$538,477",
          mediumSalesPrice: "$331,000",
          popularity: 19
        },
        DE: {
          fillKey: "Medium",
          avergeListingPrice: "$303,907",
          mediumSalesPrice: "$210,000",
          popularity: 44
        },
        FL: {
          fillKey: "Very High",
          avergeListingPrice: "$406,803",
          mediumSalesPrice: "$218,000",
          popularity: 3
        },
        GA: {
          fillKey: "Very Low",
          avergeListingPrice: "$296,535",
          mediumSalesPrice: "$193,000",
          popularity: 14
        },
        HI: {
          fillKey: "Very High",
          avergeListingPrice: "$905,687",
          mediumSalesPrice: "$442,500",
          popularity: 49
        },
        ID: {
          fillKey: "Medium",
          avergeListingPrice: "$349,000",
          mediumSalesPrice: "-",
          popularity: 25
        },
        IL: {
          fillKey: "Medium",
          avergeListingPrice: "$277,163",
          mediumSalesPrice: "$212,000",
          popularity: 39
        },
        IN: {
          fillKey: "Very Low",
          avergeListingPrice: "$190,843",
          mediumSalesPrice: "-",
          popularity: 28
        },
        IA: {
          fillKey: "Very Low",
          avergeListingPrice: "$185,087",
          mediumSalesPrice: "$157,000",
          popularity: 47
        },
        KS: {
          fillKey: "Very Low",
          avergeListingPrice: "$187,649",
          mediumSalesPrice: "-",
          popularity: 32
        },
        KY: {
          fillKey: "Very Low",
          avergeListingPrice: "$213,848",
          mediumSalesPrice: "$170,000",
          popularity: 26
        },
        LA: {
          fillKey: "Very Low",
          avergeListingPrice: "232,610",
          mediumSalesPrice: "-",
          popularity: 41
        },
        MD: {
          fillKey: "Medium",
          avergeListingPrice: "$275,717",
          mediumSalesPrice: "-",
          popularity: 27
        },
        ME: {
          fillKey: "Medium",
          avergeListingPrice: "$367,454",
          mediumSalesPrice: "$290,000",
          popularity: 33
        },
        MA: {
          fillKey: "Very High",
          avergeListingPrice: "$602,210",
          mediumSalesPrice: "$379,000",
          popularity: 7
        },
        MN: {
          fillKey: "Medium",
          avergeListingPrice: "$212,694",
          mediumSalesPrice: "$164,000",
          popularity: 11
        },
        MI: {
          fillKey: "Medium",
          avergeListingPrice: "$290,514",
          mediumSalesPrice: "$240,000",
          popularity: 42
        },
        MS: {
          fillKey: "Very Low",
          avergeListingPrice: "$195,390",
          mediumSalesPrice: "-",
          popularity: 38
        },
        MO: {
          fillKey: "Very Low",
          avergeListingPrice: "$204,506",
          mediumSalesPrice: "-",
          popularity: 30
        },
        MT: {
          fillKey: "Very High",
          avergeListingPrice: "$314,959",
          mediumSalesPrice: "-",
          popularity: 35
        },
        NC: {
          fillKey: "Medium",
          avergeListingPrice: "$276,389",
          mediumSalesPrice: "$210,000",
          popularity: 13
        },
        NE: {
          fillKey: "Very Low",
          avergeListingPrice: "$230,000",
          mediumSalesPrice: "$178,000",
          popularity: 43
        },
        NV: {
          fillKey: "Medium",
          avergeListingPrice: "$331,971",
          mediumSalesPrice: "$249,000",
          popularity: 8
        },
        NH: {
          fillKey: "Medium",
          avergeListingPrice: "$310,914",
          mediumSalesPrice: "$245,000",
          popularity: 34
        },
        NJ: {
          fillKey: "Medium",
          avergeListingPrice: "$372,916",
          mediumSalesPrice: "$290,000",
          popularity: 12
        },
        NY: {
          fillKey: "New York",
          avergeListingPrice: "$565,227",
          mediumSalesPrice: "$430,000",
          popularity: 4
        },
        ND: {
          fillKey: "Very Low",
          avergeListingPrice: "$226,863",
          mediumSalesPrice: "-",
          popularity: 50
        },
        NM: {
          fillKey: "Medium",
          avergeListingPrice: "$254,798",
          mediumSalesPrice: "-",
          popularity: 21
        },
        OH: {
          fillKey: "Very Low",
          avergeListingPrice: "$190,371",
          mediumSalesPrice: "$154,900",
          popularity: 24
        },
        OK: {
          fillKey: "Very Low",
          avergeListingPrice: "$201,091",
          mediumSalesPrice: "$150,000",
          popularity: 23
        },
        OR: {
          fillKey: "Very High",
          avergeListingPrice: "$416,718",
          mediumSalesPrice: "$315,000",
          popularity: 20
        },
        PA: {
          fillKey: "Very Low",
          avergeListingPrice: "$224,090",
          mediumSalesPrice: "$191,000",
          popularity: 6
        },
        RI: {
          fillKey: "Very High",
          avergeListingPrice: "$405,450",
          mediumSalesPrice: "$256,000",
          popularity: 45
        },
        SC: {
          fillKey: "Medium",
          avergeListingPrice: "$291,636",
          mediumSalesPrice: "$181,500",
          popularity: 18
        },
        SD: {
          fillKey: "Very Low",
          avergeListingPrice: "$238,163",
          mediumSalesPrice: "$177,500",
          popularity: 48
        },
        TN: {
          fillKey: "Medium",
          avergeListingPrice: "$268,692",
          mediumSalesPrice: "$190,000",
          popularity: 9
        },
        TX: {
          fillKey: "Medium",
          avergeListingPrice: "$320,060",
          mediumSalesPrice: "$-",
          popularity: 2
        },
        UT: {
          fillKey: "Very High",
          avergeListingPrice: "$440,946",
          mediumSalesPrice: "-",
          popularity: 29
        },
        WI: {
          fillKey: "Very Low",
          avergeListingPrice: "$223,480",
          mediumSalesPrice: "$197,000",
          popularity: 40
        },
        VA: {
          fillKey: "Medium",
          avergeListingPrice: "341,015",
          mediumSalesPrice: "$297,500",
          popularity: 5
        },
        VT: {
          fillKey: "Medium",
          avergeListingPrice: "$306,034",
          mediumSalesPrice: "$332,719",
          popularity: 46
        },
        WA: {
          fillKey: "Medium",
          avergeListingPrice: "$378,575",
          mediumSalesPrice: "$332,719",
          popularity: 17
        },
        WV: {
          fillKey: "Very Low",
          avergeListingPrice: "$174,865",
          mediumSalesPrice: "$136,500",
          popularity: 37
        },
        WY: {
          fillKey: "Very Low",
          avergeListingPrice: "$291,855",
          mediumSalesPrice: "$-",
          popularity: 36
        },
        CA: {
          fillKey: "Very High",
          avergeListingPrice: "$697,539",
          mediumSalesPrice: "$462,000",
          popularity: 1
        },
        CT: {
          fillKey: "Very High",
          avergeListingPrice: "$435,858",
          mediumSalesPrice: "$253,500",
          popularity: 22
        },
        AK: {
          fillKey: "Medium",
          avergeListingPrice: "$267,404",
          mediumSalesPrice: "$-",
          popularity: 31
        },
        AR: {
          fillKey: "Very Low",
          avergeListingPrice: "$191,446",
          mediumSalesPrice: "$156,000",
          popularity: 16
        },
        AL: {
          fillKey: "Very Low",
          avergeListingPrice: "$212,733",
          mediumSalesPrice: "$171,500",
          popularity: 10
        }
      },
      done: function(map) {
        map.svg.selectAll(".datamaps-subunit").on("click", function(geo) {
          var localData = map.options.data[geo.id];
        });
      }
    });
    Map.labels();
    window.addEventListener("resize", function() {
      Map.resize();
    });
  }

  render() {
    const divStyle = {
      position: "relative",
      width: "110%",
      height: "100%"
    };
    return (
      <div>
        <div
          id="map_average_listing"
          className="animated jello"
          style={divStyle}
        />
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateInfo: state.states
  };
};

export default connect(mapState)(DataMapHousing);
