import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA apartments map
class DataMapApartments2Br extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_median2BrRent"),
      responsive: true,
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
        "Very High": "#0061ff",
        "Relative High": "#FF6666",
        "Relative Low": "#ffcccc",
        "Very Low": "#a0c4ff",
        Middle: "#5b99ff",
        defaultFill: "#EDDC4E",
        "New York": "#ff5347"
      },
      data: {
        AZ: {
          fillKey: "Very High",
          median2BrRent: "$1,030"
        },
        CO: {
          fillKey: "Very High",
          median2BrRent: "$1,270"
        },
        DE: {
          fillKey: "Very High",
          median2BrRent: "$1,170"
        },
        FL: {
          fillKey: "Very High",
          median2BrRent: "$1,190"
        },
        GA: {
          fillKey: "Very High",
          median2BrRent: "$1,010"
        },
        HI: {
          fillKey: "Very High",
          median2BrRent: "$1,940"
        },
        ID: {
          fillKey: "Middle",
          median2BrRent: "$820"
        },
        IL: {
          fillKey: "Very High",
          median2BrRent: "$1,080"
        },
        IN: {
          fillKey: "Middle",
          median2BrRent: "$810"
        },
        IA: {
          fillKey: "Very High",
          median2BrRent: "$780"
        },
        KS: {
          fillKey: "Middle",
          median2BrRent: "$840"
        },
        KY: {
          fillKey: "Middle",
          median2BrRent: "$770"
        },
        LA: {
          fillKey: "Middle",
          median2BrRent: "$840"
        },
        MD: {
          fillKey: "Very High",
          median2BrRent: "$1,480"
        },
        ME: {
          fillKey: "Very High",
          median2BrRent: "$970"
        },
        MA: {
          fillKey: "Very High",
          median2BrRent: "$1,580"
        },
        MN: {
          fillKey: "Very High",
          median2BrRent: "$1,060"
        },
        MI: {
          fillKey: "Very High",
          median2BrRent: "$910"
        },
        MS: {
          fillKey: "Middle",
          median2BrRent: "$800"
        },
        MO: {
          fillKey: "Middle",
          median2BrRent: "$840"
        },
        MT: {
          fillKey: "Middle",
          median2BrRent: "$780"
        },
        NC: {
          fillKey: "Middle",
          median2BrRent: "$880"
        },
        NE: {
          fillKey: "Middle",
          median2BrRent: "$820"
        },
        NV: {
          fillKey: "Middle",
          median2BrRent: "$1,080"
        },
        NH: {
          fillKey: "Very High",
          median2BrRent: "$1,290"
        },
        NJ: {
          fillKey: "Very High",
          median2BrRent: "$1,510"
        },
        NY: {
          fillKey: "New York",
          median2BrRent: "$1,500"
        },
        ND: {
          fillKey: "Middle",
          median2BrRent: "$780"
        },
        NM: {
          fillKey: "Very Low",
          median2BrRent: "$820"
        },
        OH: {
          fillKey: "Middle",
          median2BrRent: "$840"
        },
        OK: {
          fillKey: "Middle",
          median2BrRent: "$770"
        },
        OR: {
          fillKey: "Very Low",
          median2BrRent: "$1,210"
        },
        PA: {
          fillKey: "Very Low",
          median2BrRent: "$1,010"
        },
        RI: {
          fillKey: "Very Low",
          median2BrRent: "$1,150"
        },
        SC: {
          fillKey: "Middle",
          median2BrRent: "$910"
        },
        SD: {
          fillKey: "Very Low",
          median2BrRent: "$720"
        },
        TN: {
          fillKey: "Very Low",
          median2BrRent: "$850"
        },
        TX: {
          fillKey: "Very Low",
          median2BrRent: "$1,040"
        },
        UT: {
          fillKey: "Very Low",
          median2BrRent: "$970"
        },
        WI: {
          fillKey: "Very Low",
          median2BrRent: "$850"
        },
        VA: {
          fillKey: "Very High",
          median2BrRent: "$1,220"
        },
        VT: {
          fillKey: "Very High",
          median2BrRent: "$1,220"
        },
        WA: {
          fillKey: "Very High",
          median2BrRent: "$1,430"
        },
        WV: {
          fillKey: "Very Low",
          median2BrRent: "$730"
        },
        WY: {
          fillKey: "Very Low",
          median2BrRent: "$780"
        },
        CA: {
          fillKey: "Very High",
          median2BrRent: "$1,830"
        },
        CT: {
          fillKey: "Very High",
          median2BrRent: "$1,350"
        },
        AK: {
          fillKey: "Very High",
          median2BrRent: "$1,190"
        },
        AR: {
          fillKey: "Very Low",
          median2BrRent: "$720"
        },
        AL: {
          fillKey: "Very Low",
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
          id="map_median2BrRent"
          className="animated bounce"
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

export default connect(mapState)(DataMapApartments2Br);
