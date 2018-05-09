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
            data.info +
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
          info: "$1,030"
        },
        CO: {
          fillKey: "Democrat",
          info: "$1,270"
        },
        DE: {
          fillKey: "Democrat",
          info: "$1,170"
        },
        FL: {
          fillKey: "UNDECIDED",
          info: "$1,190"
        },
        GA: {
          fillKey: "Republican",
          info: "$1,010"
        },
        HI: {
          fillKey: "Democrat",
          info: "$1,940"
        },
        ID: {
          fillKey: "Republican",
          info: "$820"
        },
        IL: {
          fillKey: "Democrat",
          info: "$1,080"
        },
        IN: {
          fillKey: "Republican",
          info: "$810"
        },
        IA: {
          fillKey: "Light Democrat",
          info: "$780"
        },
        KS: {
          fillKey: "Republican",
          info: "$840"
        },
        KY: {
          fillKey: "Republican",
          info: "$770"
        },
        LA: {
          fillKey: "Republican",
          info: "$840"
        },
        MD: {
          fillKey: "Democrat",
          info: "$1,480"
        },
        ME: {
          fillKey: "Democrat",
          info: "$970"
        },
        MA: {
          fillKey: "Democrat",
          info: "$1,580"
        },
        MN: {
          fillKey: "Democrat",
          info: "$1,060"
        },
        MI: {
          fillKey: "Democrat",
          info: "$910"
        },
        MS: {
          fillKey: "Republican",
          info: "$800"
        },
        MO: {
          fillKey: "Republican",
          info: "$840"
        },
        MT: {
          fillKey: "Republican",
          info: "$780"
        },
        NC: {
          fillKey: "Light Republican",
          info: "$880"
        },
        NE: {
          fillKey: "Republican",
          info: "$820"
        },
        NV: {
          fillKey: "Heavy Democrat",
          info: "$1,080"
        },
        NH: {
          fillKey: "Light Democrat",
          info: "$1,290"
        },
        NJ: {
          fillKey: "Democrat",
          info: "$1,510"
        },
        NY: {
          fillKey: "Very High",
          info: "$1,500"
        },
        ND: {
          fillKey: "Republican",
          info: "$780"
        },
        NM: {
          fillKey: "Democrat",
          info: "$820"
        },
        OH: {
          fillKey: "UNDECIDED",
          info: "$840"
        },
        OK: {
          fillKey: "Republican",
          info: "$770"
        },
        OR: {
          fillKey: "Democrat",
          info: "$1,210"
        },
        PA: {
          fillKey: "Democrat",
          info: "$1,010"
        },
        RI: {
          fillKey: "Democrat",
          info: "$1,150"
        },
        SC: {
          fillKey: "Republican",
          info: "$910"
        },
        SD: {
          fillKey: "Republican",
          info: "$720"
        },
        TN: {
          fillKey: "Republican",
          info: "$850"
        },
        TX: {
          fillKey: "Republican",
          info: "$1,040"
        },
        UT: {
          fillKey: "Republican",
          info: "$970"
        },
        WI: {
          fillKey: "Democrat",
          info: "$850"
        },
        VA: {
          fillKey: "Light Democrat",
          info: "$1,220"
        },
        VT: {
          fillKey: "Democrat",
          info: "$1,220"
        },
        WA: {
          fillKey: "Democrat",
          info: "$1,430"
        },
        WV: {
          fillKey: "Republican",
          info: "$730"
        },
        WY: {
          fillKey: "Republican",
          info: "$780"
        },
        CA: {
          fillKey: "Democrat",
          info: "$1,830"
        },
        CT: {
          fillKey: "Democrat",
          info: "$1,350"
        },
        AK: {
          fillKey: "Republican",
          info: "$1,190"
        },
        AR: {
          fillKey: "Republican",
          info: "$720"
        },
        AL: {
          fillKey: "Republican",
          info: "$790"
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
      height: "800px"
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
