import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA apartments map
class DataMapApartments2Br extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_median2BrRent"),
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function(geography, data) {
          return (
            "<div class=\"hoverinfo\">" +
            geography.properties.name +
            "</br>" +
            "Median 2 Bedroom Rent: " +
            data.median2BrRent +
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
        "Relative High": "#FF6666",
        "Relative Low": "#ffcccc",
        "Very Low": "#EAA9A8",
        defaultFill: "#EDDC4E"
      },
      data: {
        AZ: {
          fillKey: "Democrat",
          median2BrRent: "$1,030"
        },
        CO: {
          fillKey: "Democrat",
          median2BrRent: "$1,270"
        },
        DE: {
          fillKey: "Democrat",
          median2BrRent: "$1,170"
        },
        FL: {
          fillKey: "UNDECIDED",
          median2BrRent: "$1,190"
        },
        GA: {
          fillKey: "Republican",
          median2BrRent: "$1,010"
        },
        HI: {
          fillKey: "Democrat",
          median2BrRent: "$1,940"
        },
        ID: {
          fillKey: "Republican",
          median2BrRent: "$820"
        },
        IL: {
          fillKey: "Democrat",
          median2BrRent: "$1,080"
        },
        IN: {
          fillKey: "Republican",
          median2BrRent: "$810"
        },
        IA: {
          fillKey: "Light Democrat",
          median2BrRent: "$780"
        },
        KS: {
          fillKey: "Republican",
          median2BrRent: "$840"
        },
        KY: {
          fillKey: "Republican",
          median2BrRent: "$770"
        },
        LA: {
          fillKey: "Republican",
          median2BrRent: "$840"
        },
        MD: {
          fillKey: "Democrat",
          median2BrRent: "$1,480"
        },
        ME: {
          fillKey: "Democrat",
          median2BrRent: "$970"
        },
        MA: {
          fillKey: "Democrat",
          median2BrRent: "$1,580"
        },
        MN: {
          fillKey: "Democrat",
          median2BrRent: "$1,060"
        },
        MI: {
          fillKey: "Democrat",
          median2BrRent: "$910"
        },
        MS: {
          fillKey: "Republican",
          median2BrRent: "$800"
        },
        MO: {
          fillKey: "Republican",
          median2BrRent: "$840"
        },
        MT: {
          fillKey: "Republican",
          median2BrRent: "$780"
        },
        NC: {
          fillKey: "Light Republican",
          median2BrRent: "$880"
        },
        NE: {
          fillKey: "Republican",
          median2BrRent: "$820"
        },
        NV: {
          fillKey: "Heavy Democrat",
          median2BrRent: "$1,080"
        },
        NH: {
          fillKey: "Light Democrat",
          median2BrRent: "$1,290"
        },
        NJ: {
          fillKey: "Democrat",
          median2BrRent: "$1,510"
        },
        NY: {
          fillKey: "Very High",
          median2BrRent: "$1,500"
        },
        ND: {
          fillKey: "Republican",
          median2BrRent: "$780"
        },
        NM: {
          fillKey: "Democrat",
          median2BrRent: "$820"
        },
        OH: {
          fillKey: "UNDECIDED",
          median2BrRent: "$840"
        },
        OK: {
          fillKey: "Republican",
          median2BrRent: "$770"
        },
        OR: {
          fillKey: "Democrat",
          median2BrRent: "$1,210"
        },
        PA: {
          fillKey: "Democrat",
          median2BrRent: "$1,010"
        },
        RI: {
          fillKey: "Democrat",
          median2BrRent: "$1,150"
        },
        SC: {
          fillKey: "Republican",
          median2BrRent: "$910"
        },
        SD: {
          fillKey: "Republican",
          median2BrRent: "$720"
        },
        TN: {
          fillKey: "Republican",
          median2BrRent: "$850"
        },
        TX: {
          fillKey: "Republican",
          median2BrRent: "$1,040"
        },
        UT: {
          fillKey: "Republican",
          median2BrRent: "$970"
        },
        WI: {
          fillKey: "Democrat",
          median2BrRent: "$850"
        },
        VA: {
          fillKey: "Light Democrat",
          median2BrRent: "$1,220"
        },
        VT: {
          fillKey: "Democrat",
          median2BrRent: "$1,220"
        },
        WA: {
          fillKey: "Democrat",
          median2BrRent: "$1,430"
        },
        WV: {
          fillKey: "Republican",
          median2BrRent: "$730"
        },
        WY: {
          fillKey: "Republican",
          median2BrRent: "$780"
        },
        CA: {
          fillKey: "Democrat",
          median2BrRent: "$1,830"
        },
        CT: {
          fillKey: "Democrat",
          median2BrRent: "$1,350"
        },
        AK: {
          fillKey: "Republican",
          median2BrRent: "$1,190"
        },
        AR: {
          fillKey: "Republican",
          median2BrRent: "$720"
        },
        AL: {
          fillKey: "Republican",
          median2BrRent: "$790"
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
      width: "1100px",
      height: "600px"
    };
    return (
      <div>
        <div id="map_median2BrRent" style={divStyle} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateInfo: state.states
  };
};

export default connect(mapState)(DataMapApartments2Br);
