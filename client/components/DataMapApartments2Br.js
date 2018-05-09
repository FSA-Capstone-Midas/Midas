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
            data.median1BrRent +
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
          avergeSalesPrice: "$322,398"
        },
        CO: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        DE: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        FL: {
          fillKey: "UNDECIDED",
          median1BrRent: "$322,398"
        },
        GA: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        HI: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        ID: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        IL: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        IN: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        IA: {
          fillKey: "Light Democrat",
          median1BrRent: "$322,398"
        },
        KS: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        KY: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        LA: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        MD: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        ME: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        MA: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        MN: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        MI: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        MS: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        MO: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        MT: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        NC: {
          fillKey: "Light Republican",
          median1BrRent: "$322,398"
        },
        NE: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        NV: {
          fillKey: "Heavy Democrat",
          median1BrRent: "$322,398"
        },
        NH: {
          fillKey: "Light Democrat",
          median1BrRent: "$322,398"
        },
        NJ: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        NY: {
          fillKey: "Very High",
          median1BrRent: "$322,398"
        },
        ND: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        NM: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        OH: {
          fillKey: "UNDECIDED",
          median1BrRent: "$322,398"
        },
        OK: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        OR: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        PA: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        RI: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        SC: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        SD: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        TN: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        TX: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        UT: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        WI: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        VA: {
          fillKey: "Light Democrat",
          median1BrRent: "$322,398"
        },
        VT: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        WA: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        WV: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        WY: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        CA: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        CT: {
          fillKey: "Democrat",
          median1BrRent: "$322,398"
        },
        AK: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        AR: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
        },
        AL: {
          fillKey: "Republican",
          median1BrRent: "$322,398"
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
