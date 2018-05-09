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
        "Very High": "#800000",
        "Relative High": "#FF6666",
        "Relative Low": "#ffcccc",
        "Very Low": "#EAA9A8",
        defaultFill: "#EDDC4E"
      },
      data: {
        AZ: {
          fillKey: "Democrat",
          median1BrRent: "$820"
        },
        CO: {
          fillKey: "Democrat",
          median1BrRent: "$1,000"
        },
        DE: {
          fillKey: "Democrat",
          median1BrRent: "$960"
        },
        FL: {
          fillKey: "UNDECIDED",
          median1BrRent: "$950"
        },
        GA: {
          fillKey: "Republican",
          median1BrRent: "$850"
        },
        HI: {
          fillKey: "Democrat",
          median1BrRent: "$1,480"
        },
        ID: {
          fillKey: "Republican",
          median1BrRent: "$640"
        },
        IL: {
          fillKey: "Democrat",
          median1BrRent: "$900"
        },
        IN: {
          fillKey: "Republican",
          median1BrRent: "$650"
        },
        IA: {
          fillKey: "Light Democrat",
          median1BrRent: "$610"
        },
        KS: {
          fillKey: "Republican",
          median1BrRent: "$650"
        },
        KY: {
          fillKey: "Republican",
          median1BrRent: "$600"
        },
        LA: {
          fillKey: "Republican",
          median1BrRent: "$700"
        },
        MD: {
          fillKey: "Democrat",
          median1BrRent: "$1,220"
        },
        ME: {
          fillKey: "Democrat",
          median1BrRent: "$780"
        },
        MA: {
          fillKey: "Democrat",
          median1BrRent: "$1,270"
        },
        MN: {
          fillKey: "Democrat",
          median1BrRent: "$840"
        },
        MI: {
          fillKey: "Democrat",
          median1BrRent: "$710"
        },
        MS: {
          fillKey: "Republican",
          median1BrRent: "$650"
        },
        MO: {
          fillKey: "Republican",
          median1BrRent: "$660"
        },
        MT: {
          fillKey: "Republican",
          median1BrRent: "$620"
        },
        NC: {
          fillKey: "Light Republican",
          median1BrRent: "$730"
        },
        NE: {
          fillKey: "Republican",
          median1BrRent: "$640"
        },
        NV: {
          fillKey: "Heavy Democrat",
          median1BrRent: "$860"
        },
        NH: {
          fillKey: "Light Democrat",
          median1BrRent: "$1,010"
        },
        NJ: {
          fillKey: "Democrat",
          median1BrRent: "$1,230"
        },
        NY: {
          fillKey: "Very High",
          median1BrRent: "$1,260"
        },
        ND: {
          fillKey: "Republican",
          median1BrRent: "$610"
        },
        NM: {
          fillKey: "Democrat",
          median1BrRent: "$660"
        },
        OH: {
          fillKey: "UNDECIDED",
          median1BrRent: "$650"
        },
        OK: {
          fillKey: "Republican",
          median1BrRent: "$600"
        },
        OR: {
          fillKey: "Democrat",
          median1BrRent: "$990"
        },
        PA: {
          fillKey: "Democrat",
          median1BrRent: "$820"
        },
        RI: {
          fillKey: "Democrat",
          median1BrRent: "$950"
        },
        SC: {
          fillKey: "Republican",
          median1BrRent: "$760"
        },
        SD: {
          fillKey: "Republican",
          median1BrRent: "$560"
        },
        TN: {
          fillKey: "Republican",
          median1BrRent: "$690"
        },
        TX: {
          fillKey: "Republican",
          median1BrRent: "$830"
        },
        UT: {
          fillKey: "Republican",
          median1BrRent: "$790"
        },
        WI: {
          fillKey: "Democrat",
          median1BrRent: "$670"
        },
        VA: {
          fillKey: "Light Democrat",
          median1BrRent: "$1,030"
        },
        VT: {
          fillKey: "Democrat",
          median1BrRent: "$970"
        },
        WA: {
          fillKey: "Democrat",
          median1BrRent: "$1,140"
        },
        WV: {
          fillKey: "Republican",
          median1BrRent: "$600"
        },
        WY: {
          fillKey: "Republican",
          median1BrRent: "$610"
        },
        CA: {
          fillKey: "Democrat",
          median1BrRent: "$1,430"
        },
        CT: {
          fillKey: "Democrat",
          median1BrRent: "$1070"
        },
        AK: {
          fillKey: "Republican",
          median1BrRent: "$930"
        },
        AR: {
          fillKey: "Republican",
          median1BrRent: "$570"
        },
        AL: {
          fillKey: "Republican",
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
      width: "1500px",
      height: "800px"
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
