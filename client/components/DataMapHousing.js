import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA housing map
class DataMapHousing extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_average_listing"),
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function(geography, data) {
          return (
            '<div class="hoverinfo">' +
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
        "Very High": "#800000",
        High: "#ff1a1a",
        "Relative High": "#FF6666",
        Low: "#ff9999",
        "Relative Low": "#ffcccc",
        "Very Low": "#EAA9A8",
        defaultFill: "#EDDC4E"
      },
      data: {
        AZ: {
          fillKey: "Democrat",
          avergeListingPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        CO: {
          fillKey: "Democrat",
          avergeListingPrice: "$538,477",
          mediumSalesPrice: "$331,000",
          popularity: 19
        },
        DE: {
          fillKey: "Democrat",
          avergeListingPrice: "$303,907",
          mediumSalesPrice: "$210,000",
          popularity: 44
        },
        FL: {
          fillKey: "UNDECIDED",
          avergeListingPrice: "$406,803",
          mediumSalesPrice: "$218,000",
          popularity: 3
        },
        GA: {
          fillKey: "Republican",
          avergeListingPrice: "$296,535",
          mediumSalesPrice: "$193,000",
          popularity: 14
        },
        HI: {
          fillKey: "Democrat",
          avergeListingPrice: "$905,687",
          mediumSalesPrice: "$442,500",
          popularity: 49
        },
        ID: {
          fillKey: "Republican",
          avergeListingPrice: "$349,000",
          mediumSalesPrice: "-",
          popularity: 25
        },
        IL: {
          fillKey: "Democrat",
          avergeListingPrice: "$277,163",
          mediumSalesPrice: "$212,000",
          popularity: 39
        },
        IN: {
          fillKey: "Republican",
          avergeListingPrice: "$190,843",
          mediumSalesPrice: "-",
          popularity: 28
        },
        IA: {
          fillKey: "Light Democrat",
          avergeListingPrice: "$185,087",
          mediumSalesPrice: "$157,000",
          popularity: 47
        },
        KS: {
          fillKey: "Republican",
          avergeListingPrice: "$187,649",
          mediumSalesPrice: "-",
          popularity: 32
        },
        KY: {
          fillKey: "Republican",
          avergeListingPrice: "$213,848",
          mediumSalesPrice: "$170,000",
          popularity: 26
        },
        LA: {
          fillKey: "Republican",
          avergeListingPrice: "232,610",
          mediumSalesPrice: "-",
          popularity: 41
        },
        MD: {
          fillKey: "Democrat",
          avergeListingPrice: "$275,717",
          mediumSalesPrice: "-",
          popularity: 27
        },
        ME: {
          fillKey: "Democrat",
          avergeListingPrice: "$367,454",
          mediumSalesPrice: "$290,000",
          popularity: 33
        },
        MA: {
          fillKey: "Democrat",
          avergeListingPrice: "$602,210",
          mediumSalesPrice: "$379,000",
          popularity: 7
        },
        MN: {
          fillKey: "Democrat",
          avergeListingPrice: "$212,694",
          mediumSalesPrice: "$164,000",
          popularity: 11
        },
        MI: {
          fillKey: "Democrat",
          avergeListingPrice: "$290,514",
          mediumSalesPrice: "$240,000",
          popularity: 42
        },
        MS: {
          fillKey: "Republican",
          avergeListingPrice: "$195,390",
          mediumSalesPrice: "-",
          popularity: 38
        },
        MO: {
          fillKey: "Republican",
          avergeListingPrice: "$204,506",
          mediumSalesPrice: "-",
          popularity: 30
        },
        MT: {
          fillKey: "Republican",
          avergeListingPrice: "$314,959",
          mediumSalesPrice: "-",
          popularity: 35
        },
        NC: {
          fillKey: "Light Republican",
          avergeListingPrice: "$276,389",
          mediumSalesPrice: "$210,000",
          popularity: 13
        },
        NE: {
          fillKey: "Republican",
          avergeListingPrice: "$230,000",
          mediumSalesPrice: "$178,000",
          popularity: 43
        },
        NV: {
          fillKey: "Heavy Democrat",
          avergeListingPrice: "$331,971",
          mediumSalesPrice: "$249,000",
          popularity: 8
        },
        NH: {
          fillKey: "Light Democrat",
          avergeListingPrice: "$310,914",
          mediumSalesPrice: "$245,000",
          popularity: 34
        },
        NJ: {
          fillKey: "Democrat",
          avergeListingPrice: "$372,916",
          mediumSalesPrice: "$290,000",
          popularity: 12
        },
        NY: {
          fillKey: "Very High",
          avergeListingPrice: "$565,227",
          mediumSalesPrice: "$430,000",
          popularity: 4
        },
        ND: {
          fillKey: "Republican",
          avergeListingPrice: "$226,863",
          mediumSalesPrice: "-",
          popularity: 50
        },
        NM: {
          fillKey: "Democrat",
          avergeListingPrice: "$254,798",
          mediumSalesPrice: "-",
          popularity: 21
        },
        OH: {
          fillKey: "UNDECIDED",
          avergeListingPrice: "$190,371",
          mediumSalesPrice: "$154,900",
          popularity: 24
        },
        OK: {
          fillKey: "Republican",
          avergeListingPrice: "$201,091",
          mediumSalesPrice: "$150,000",
          popularity: 23
        },
        OR: {
          fillKey: "Democrat",
          avergeListingPrice: "$416,718",
          mediumSalesPrice: "$315,000",
          popularity: 20
        },
        PA: {
          fillKey: "Democrat",
          avergeListingPrice: "$224,090",
          mediumSalesPrice: "$191,000",
          popularity: 6
        },
        RI: {
          fillKey: "Democrat",
          avergeListingPrice: "$405,450",
          mediumSalesPrice: "$256,000",
          popularity: 45
        },
        SC: {
          fillKey: "Republican",
          avergeListingPrice: "$291,636",
          mediumSalesPrice: "$181,500",
          popularity: 18
        },
        SD: {
          fillKey: "Republican",
          avergeListingPrice: "$238,163",
          mediumSalesPrice: "$177,500",
          popularity: 48
        },
        TN: {
          fillKey: "Republican",
          avergeListingPrice: "$268,692",
          mediumSalesPrice: "$190,000",
          popularity: 9
        },
        TX: {
          fillKey: "Republican",
          avergeListingPrice: "$320,060",
          mediumSalesPrice: "$-",
          popularity: 2
        },
        UT: {
          fillKey: "Republican",
          avergeListingPrice: "$440,946",
          mediumSalesPrice: "-",
          popularity: 29
        },
        WI: {
          fillKey: "Democrat",
          avergeListingPrice: "$223,480",
          mediumSalesPrice: "$197,000",
          popularity: 40
        },
        VA: {
          fillKey: "Light Democrat",
          avergeListingPrice: "341,015",
          mediumSalesPrice: "$297,500",
          popularity: 5
        },
        VT: {
          fillKey: "Democrat",
          avergeListingPrice: "$306,034",
          mediumSalesPrice: "$332,719",
          popularity: 46
        },
        WA: {
          fillKey: "Democrat",
          avergeListingPrice: "$378,575",
          mediumSalesPrice: "$332,719",
          popularity: 17
        },
        WV: {
          fillKey: "Republican",
          avergeListingPrice: "$174,865",
          mediumSalesPrice: "$136,500",
          popularity: 37
        },
        WY: {
          fillKey: "Republican",
          avergeListingPrice: "$291,855",
          mediumSalesPrice: "$-",
          popularity: 36
        },
        CA: {
          fillKey: "Democrat",
          avergeListingPrice: "$697,539",
          mediumSalesPrice: "$462,000",
          popularity: 1
        },
        CT: {
          fillKey: "Democrat",
          avergeListingPrice: "$435,858",
          mediumSalesPrice: "$253,500",
          popularity: 22
        },
        AK: {
          fillKey: "Republican",
          avergeListingPrice: "$267,404",
          mediumSalesPrice: "$-",
          popularity: 31
        },
        AR: {
          fillKey: "Republican",
          avergeListingPrice: "$191,446",
          mediumSalesPrice: "$156,000",
          popularity: 16
        },
        AL: {
          fillKey: "Republican",
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
  }

  render() {
    const divStyle = {
      position: "relative",
      width: "1500px",
      height: "800px",
      className: "twelve wide column"
    };
    return (
      <div>
        <div id="map_average_listing" style={divStyle} />
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
