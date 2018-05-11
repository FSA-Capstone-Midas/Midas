import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA apartments map
class DataMapApartments extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_median1BrRent"),
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function(geography, data) {
          return (
            "<div class=\"hoverinfo\">" +
            geography.properties.name +
            "</br>" +
            "Median 1 Bedroom Rent: " +
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
        "Very High": "#e9ff00",
        "Relative High": "#FF6666",
        "Relative Low": "#ffcccc",
        Middle: "#fbff87",
        "Very Low": "#f8ffb7",
        defaultFill: "#e9ff00",
        "New York": "#ff5347"
      },
      data: {
        AZ: {
          fillKey: "Very Low",
          median1BrRent: "$820",
          defaultFill: "#FFFF00"
        },
        CO: {
          fillKey: "Very High",
          median1BrRent: "$1,000"
        },
        DE: {
          fillKey: "Middle",
          median1BrRent: "$960"
        },
        FL: {
          fillKey: "Middle",
          median1BrRent: "$950"
        },
        GA: {
          fillKey: "Middle",
          median1BrRent: "$850"
        },
        HI: {
          fillKey: "Very High",
          median1BrRent: "$1,480"
        },
        ID: {
          fillKey: "Middle",
          median1BrRent: "$640"
        },
        IL: {
          fillKey: "Very Low",
          median1BrRent: "$900"
        },
        IN: {
          fillKey: "Middle",
          median1BrRent: "$650"
        },
        IA: {
          fillKey: "Very Low",
          median1BrRent: "$610"
        },
        KS: {
          fillKey: "Very Low",
          median1BrRent: "$650"
        },
        KY: {
          fillKey: "Very Low",
          median1BrRent: "$600"
        },
        LA: {
          fillKey: "Middle",
          median1BrRent: "$700"
        },
        MD: {
          fillKey: "Very High",
          median1BrRent: "$1,220"
        },
        ME: {
          fillKey: "Middle",
          median1BrRent: "$780"
        },
        MA: {
          fillKey: "Very High",
          median1BrRent: "$1,270"
        },
        MN: {
          fillKey: "Middle",
          median1BrRent: "$840"
        },
        MI: {
          fillKey: "Very Low",
          median1BrRent: "$710"
        },
        MS: {
          fillKey: "Middle",
          median1BrRent: "$650"
        },
        MO: {
          fillKey: "Very Low",
          median1BrRent: "$660"
        },
        MT: {
          fillKey: "Very Low",
          median1BrRent: "$620"
        },
        NC: {
          fillKey: "Middle",
          median1BrRent: "$730"
        },
        NE: {
          fillKey: "Very Low",
          median1BrRent: "$640"
        },
        NV: {
          fillKey: "Middle",
          median1BrRent: "$860"
        },
        NH: {
          fillKey: "Very High",
          median1BrRent: "$1,010"
        },
        NJ: {
          fillKey: "Very High",
          median1BrRent: "$1,230"
        },
        NY: {
          fillKey: "New York",
          median1BrRent: "$1,260"
        },
        ND: {
          fillKey: "Very Low",
          median1BrRent: "$610"
        },
        NM: {
          fillKey: "Very Low",
          median1BrRent: "$660"
        },
        OH: {
          fillKey: "UNDECIDED",
          median1BrRent: "$650"
        },
        OK: {
          fillKey: "Very Low",
          median1BrRent: "$600"
        },
        OR: {
          fillKey: "Middle",
          median1BrRent: "$990"
        },
        PA: {
          fillKey: "Middle",
          median1BrRent: "$820"
        },
        RI: {
          fillKey: "Very High",
          median1BrRent: "$950"
        },
        SC: {
          fillKey: "Very Low",
          median1BrRent: "$760"
        },
        SD: {
          fillKey: "Very Low",
          median1BrRent: "$560"
        },
        TN: {
          fillKey: "Very Low",
          median1BrRent: "$690"
        },
        TX: {
          fillKey: "Middle",
          median1BrRent: "$830"
        },
        UT: {
          fillKey: "Very Low",
          median1BrRent: "$790"
        },
        WI: {
          fillKey: "Very Low",
          median1BrRent: "$670"
        },
        VA: {
          fillKey: "Very High",
          median1BrRent: "$1,030"
        },
        VT: {
          fillKey: "Middle",
          median1BrRent: "$970"
        },
        WA: {
          fillKey: "Very High",
          median1BrRent: "$1,140"
        },
        WV: {
          fillKey: "Very Low",
          median1BrRent: "$600"
        },
        WY: {
          fillKey: "Very Low",
          median1BrRent: "$610"
        },
        CA: {
          fillKey: "Very High",
          median1BrRent: "$1,430"
        },
        CT: {
          fillKey: "Very High",
          median1BrRent: "$1070"
        },
        AK: {
          fillKey: "Very High",
          median1BrRent: "$930"
        },
        AR: {
          fillKey: "Very Low",
          median1BrRent: "$570"
        },
        AL: {
          fillKey: "Very Low",
          median1BrRent: "$650"
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
        <div id="map_median1BrRent" style={divStyle} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateInfo: state.states
  };
};

export default connect(mapState)(DataMapApartments);
