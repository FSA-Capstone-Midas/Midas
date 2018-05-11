import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA apartments map
class DatMapApartmentsYYRentChange extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_YYRentChange"),
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function(geography, data) {
          return (
            "<div class=\"hoverinfo\">" +
            geography.properties.name +
            "</br>" +
            "Y/Y rent change: " +
            data.YYChange +
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
        "Very High": "#875700",
        High: "#ff1a1a",
        "Relative High": "#FF6666",
        Low: "#ff9999",
        "Relative Low": "#ffcccc",
        "Very Low": "#c47e00",
        Medium: "#9b6400",
        defaultFill: "#EDDC4E",
        "New York": "#ff5347"
      },
      data: {
        AZ: {
          fillKey: "Very High",
          YYChange: "3.4%"
        },
        CO: {
          fillKey: "Medium",
          YYChange: "2.6%"
        },
        DE: {
          fillKey: "Medium",
          YYChange: "2.0%"
        },
        FL: {
          fillKey: "Very High",
          YYChange: "3.3%"
        },
        GA: {
          fillKey: "Very High",
          YYChange: "3.1%"
        },
        HI: {
          fillKey: "Very Low",
          YYChange: "0%"
        },
        ID: {
          fillKey: "Very High",
          YYChange: "4.2%"
        },
        IL: {
          fillKey: "Medium",
          YYChange: "1.0%"
        },
        IN: {
          fillKey: "Medium",
          YYChange: "1.8%"
        },
        IA: {
          fillKey: "Medium",
          YYChange: "0.7%"
        },
        KS: {
          fillKey: "Medium",
          YYChange: "1.6%"
        },
        KY: {
          fillKey: "Very Low",
          YYChange: "0%"
        },
        LA: {
          fillKey: "Medium",
          YYChange: "1.0%"
        },
        MD: {
          fillKey: "Very Low",
          YYChange: "0.9%"
        },
        ME: {
          fillKey: "Medium",
          YYChange: "1.5%"
        },
        MA: {
          fillKey: "Very High",
          YYChange: "2.7%"
        },
        MN: {
          fillKey: "Very High",
          YYChange: "3.0%"
        },
        MI: {
          fillKey: "Medium",
          YYChange: "2.1%"
        },
        MS: {
          fillKey: "Medium",
          YYChange: "2.1%"
        },
        MO: {
          fillKey: "Very Low",
          YYChange: "0.8%"
        },
        MT: {
          fillKey: "Medium",
          YYChange: "2.2%"
        },
        NC: {
          fillKey: "Medium",
          YYChange: "2.3%"
        },
        NE: {
          fillKey: "Very Low",
          YYChange: "1.3%"
        },
        NV: {
          fillKey: "Very High",
          YYChange: "4.6%"
        },
        NH: {
          fillKey: "Medium",
          YYChange: "2.2%"
        },
        NJ: {
          fillKey: "Very Low",
          YYChange: "1.4%"
        },
        NY: {
          fillKey: "New York",
          YYChange: "0.7%"
        },
        ND: {
          fillKey: "Very Low",
          YYChange: "-0.5%"
        },
        NM: {
          fillKey: "Very High",
          YYChange: "2.5%"
        },
        OH: {
          fillKey: "Very Low",
          YYChange: "1.6%"
        },
        OK: {
          fillKey: "Very Low",
          YYChange: "0%"
        },
        OR: {
          fillKey: "Very Low",
          YYChange: "0.9%"
        },
        PA: {
          fillKey: "Very Low",
          YYChange: "1.7%"
        },
        RI: {
          fillKey: "Medium",
          YYChange: "2.0%"
        },
        SC: {
          fillKey: "Medium",
          YYChange: "2.0%"
        },
        SD: {
          fillKey: "Very Low",
          YYChange: "1.2%"
        },
        TN: {
          fillKey: "Medium",
          YYChange: "1.7%"
        },
        TX: {
          fillKey: "Medium",
          YYChange: "2.3%"
        },
        UT: {
          fillKey: "Very High",
          YYChange: "4.3%"
        },
        WI: {
          fillKey: "Very Low",
          YYChange: "0.9%"
        },
        VA: {
          fillKey: "Medium",
          YYChange: "1.4%"
        },
        VT: {
          fillKey: "Medium",
          YYChange: "1.9%"
        },
        WA: {
          fillKey: "Very High",
          YYChange: "3.5%"
        },
        WV: {
          fillKey: "Very Low",
          YYChange: "-1.5%"
        },
        WY: {
          fillKey: "Very Low",
          YYChange: "-1.1%"
        },
        CA: {
          fillKey: "Very High",
          YYChange: "3.6%"
        },
        CT: {
          fillKey: "Very Low",
          YYChange: "1.3%"
        },
        AK: {
          fillKey: "Very Low",
          YYChange: "-1.0%"
        },
        AR: {
          fillKey: "Very High",
          YYChange: "3.4%"
        },
        AL: {
          fillKey: "Very Low",
          YYChange: "0.6%"
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
        <div id="map_YYRentChange" style={divStyle} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateInfo: state.states
  };
};

export default connect(mapState)(DatMapApartmentsYYRentChange);
