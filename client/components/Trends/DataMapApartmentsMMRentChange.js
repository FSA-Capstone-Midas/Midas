import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA apartments map
class DatMapApartmentsMMRentChange extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_mmRentChange"),
      responsive: true,
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function(geography, data) {
          return (
            "<div class=\"hoverinfo\">" +
            geography.properties.name +
            "</br>" +
            "M/M rent change: " +
            data.MMChange +
            " "
          );
        },
        highlightBorderWidth: 6,
      },
      // geographyConfig: {
      //   popupOnHover: true,
      //   highlightOnHover: true
      // },

      fills: {
        "Very High": "#564f68",
        High: "#ff1a1a",
        "Relative High": "#FF6666",
        Low: "#ff9999",
        "Relative Low": "#ffcccc",
        "Very Low": "#7d739b",
        Medium: "#6c6384",
        defaultFill: "#EDDC4E",
        "New York": "#ff5347",
      },
      data: {
        AZ: {
          fillKey: "Medium",
          MMChange: "0.2%",
        },
        CO: {
          fillKey: "Medium",
          MMChange: "0.2%",
        },
        DE: {
          fillKey: "Very Low",
          MMChange: "-0.1%",
        },
        FL: {
          fillKey: "Medium",
          MMChange: "0.1%",
        },
        GA: {
          fillKey: "Medium",
          MMChange: "0.1%",
        },
        HI: {
          fillKey: "Very High",
          MMChange: "0.5%",
        },
        ID: {
          fillKey: "Very Low",
          MMChange: "-0.3%",
        },
        IL: {
          fillKey: "Medium",
          MMChange: "0%",
        },
        IN: {
          fillKey: "Medium",
          MMChange: "0%",
        },
        IA: {
          fillKey: "Very Low",
          MMChange: "-0.2%",
        },
        KS: {
          fillKey: "Medium",
          MMChange: "0.2%",
        },
        KY: {
          fillKey: "Medium",
          MMChange: "0.1%",
        },
        LA: {
          fillKey: "Medium",
          MMChange: "0.4%",
        },
        MD: {
          fillKey: "Very Low",
          MMChange: "-0.1%",
        },
        ME: {
          fillKey: "Very Low",
          MMChange: "-0.5%",
        },
        MA: {
          fillKey: "Very High",
          MMChange: "0.7%",
        },
        MN: {
          fillKey: "Medium",
          MMChange: "0.3%",
        },
        MI: {
          fillKey: "Very Low",
          MMChange: "-0.1%",
        },
        MS: {
          fillKey: "Very Low",
          MMChange: "-0.1%",
        },
        MO: {
          fillKey: "Very Low",
          MMChange: "-0.2%",
        },
        MT: {
          fillKey: "Medium",
          MMChange: "0.3%",
        },
        NC: {
          fillKey: "Medium",
          MMChange: "0.1%",
        },
        NE: {
          fillKey: "Medium",
          MMChange: "0.1%",
        },
        NV: {
          fillKey: "Very High",
          MMChange: "0.3%",
        },
        NH: {
          fillKey: "Very Low",
          MMChange: "0%",
        },
        NJ: {
          fillKey: "Very Low",
          MMChange: "0.2%",
        },
        NY: {
          fillKey: "New York",
          MMChange: "0%",
        },
        ND: {
          fillKey: "Very Low",
          MMChange: "-0.6%",
        },
        NM: {
          fillKey: "Very High",
          MMChange: "0.4%",
        },
        OH: {
          fillKey: "Very Low",
          MMChange: "0%",
        },
        OK: {
          fillKey: "Very Low",
          MMChange: "-0.1%",
        },
        OR: {
          fillKey: "Very High",
          MMChange: "0.7%",
        },
        PA: {
          fillKey: "Very Low",
          MMChange: "-0.2%",
        },
        RI: {
          fillKey: "Very Low",
          MMChange: "-0.9%",
        },
        SC: {
          fillKey: "Medium",
          MMChange: "0.1%",
        },
        SD: {
          fillKey: "Medium",
          MMChange: "0.2%",
        },
        TN: {
          fillKey: "Very Low",
          MMChange: "0%",
        },
        TX: {
          fillKey: "Very Low",
          MMChange: "-0.1%",
        },
        UT: {
          fillKey: "Very Low",
          MMChange: "0%",
        },
        WI: {
          fillKey: "Very Low",
          MMChange: "0%",
        },
        VA: {
          fillKey: "Very Low",
          MMChange: "0.2%",
        },
        VT: {
          fillKey: "Very Low",
          MMChange: "-0.2%",
        },
        WA: {
          fillKey: "Very Low",
          MMChange: "-0.8%",
        },
        WV: {
          fillKey: "Very Low",
          MMChange: "-0.4%",
        },
        WY: {
          fillKey: "Medium",
          MMChange: "0.2%",
        },
        CA: {
          fillKey: "Medium",
          MMChange: "0.2%",
        },
        CT: {
          fillKey: "Medium",
          MMChange: "0.2%",
        },
        AK: {
          fillKey: "Very Low",
          MMChange: "-0.3%",
        },
        AR: {
          fillKey: "Very Low",
          MMChange: "0.1%",
        },
        AL: {
          fillKey: "Very Low",
          MMChange: "-0.5%",
        },
      },
      done: function(map) {
        map.svg.selectAll(".datamaps-subunit").on("click", function(geo) {
          var localData = map.options.data[geo.id];
        });
      },
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
      height: "100%",
    };
    return (
      <div>
        <div id="map_mmRentChange" style={divStyle} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateInfo: state.states,
  };
};

export default connect(mapState)(DatMapApartmentsMMRentChange);
