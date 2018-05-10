import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

// USA apartments map
class DatMapApartmentsMMRentChange extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_mmRentChange"),
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
          MMChange: "0.2%"
        },
        CO: {
          fillKey: "Democrat",
          MMChange: "0.2%"
        },
        DE: {
          fillKey: "Democrat",
          MMChange: "-0.1%"
        },
        FL: {
          fillKey: "UNDECIDED",
          MMChange: "0.1%"
        },
        GA: {
          fillKey: "Republican",
          MMChange: "0.1%"
        },
        HI: {
          fillKey: "Democrat",
          MMChange: "0.5%"
        },
        ID: {
          fillKey: "Republican",
          MMChange: "-0.3%"
        },
        IL: {
          fillKey: "Democrat",
          MMChange: "0%"
        },
        IN: {
          fillKey: "Republican",
          MMChange: "0%"
        },
        IA: {
          fillKey: "Light Democrat",
          MMChange: "-0.2%"
        },
        KS: {
          fillKey: "Republican",
          MMChange: "0.2%"
        },
        KY: {
          fillKey: "Republican",
          MMChange: "0.1%"
        },
        LA: {
          fillKey: "Republican",
          MMChange: "0.4%"
        },
        MD: {
          fillKey: "Democrat",
          MMChange: "-0.1%"
        },
        ME: {
          fillKey: "Democrat",
          MMChange: "-0.5%"
        },
        MA: {
          fillKey: "Democrat",
          MMChange: "0.7%"
        },
        MN: {
          fillKey: "Democrat",
          MMChange: "0.3%"
        },
        MI: {
          fillKey: "Democrat",
          MMChange: "-0.1%"
        },
        MS: {
          fillKey: "Republican",
          MMChange: "-0.1%"
        },
        MO: {
          fillKey: "Republican",
          MMChange: "-0.2%"
        },
        MT: {
          fillKey: "Republican",
          MMChange: "0.3%"
        },
        NC: {
          fillKey: "Light Republican",
          MMChange: "0.1%"
        },
        NE: {
          fillKey: "Republican",
          MMChange: "0.1%"
        },
        NV: {
          fillKey: "Heavy Democrat",
          MMChange: "0.3%"
        },
        NH: {
          fillKey: "Light Democrat",
          MMChange: "0%"
        },
        NJ: {
          fillKey: "Democrat",
          MMChange: "0.2%"
        },
        NY: {
          fillKey: "Very High",
          MMChange: "0%"
        },
        ND: {
          fillKey: "Republican",
          MMChange: "-0.6%"
        },
        NM: {
          fillKey: "Democrat",
          MMChange: "0.4%"
        },
        OH: {
          fillKey: "UNDECIDED",
          MMChange: "0%"
        },
        OK: {
          fillKey: "Republican",
          MMChange: "-0.1%"
        },
        OR: {
          fillKey: "Democrat",
          MMChange: "0.7%"
        },
        PA: {
          fillKey: "Democrat",
          MMChange: "-0.2%"
        },
        RI: {
          fillKey: "Democrat",
          MMChange: "-0.9%"
        },
        SC: {
          fillKey: "Republican",
          MMChange: "0.1%"
        },
        SD: {
          fillKey: "Republican",
          MMChange: "0.2%"
        },
        TN: {
          fillKey: "Republican",
          MMChange: "0%"
        },
        TX: {
          fillKey: "Republican",
          MMChange: "-0.1%"
        },
        UT: {
          fillKey: "Republican",
          MMChange: "0%"
        },
        WI: {
          fillKey: "Democrat",
          MMChange: "0%"
        },
        VA: {
          fillKey: "Light Democrat",
          MMChange: "0.2%"
        },
        VT: {
          fillKey: "Democrat",
          MMChange: "-0.2%"
        },
        WA: {
          fillKey: "Democrat",
          MMChange: "-0.8%"
        },
        WV: {
          fillKey: "Republican",
          MMChange: "-0.4%"
        },
        WY: {
          fillKey: "Republican",
          MMChange: "0.2%"
        },
        CA: {
          fillKey: "Democrat",
          MMChange: "0.2%"
        },
        CT: {
          fillKey: "Democrat",
          MMChange: "0.2%"
        },
        AK: {
          fillKey: "Republican",
          MMChange: "-0.3%"
        },
        AR: {
          fillKey: "Republican",
          MMChange: "0.1%"
        },
        AL: {
          fillKey: "Republican",
          MMChange: "-0.5%"
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
        <div id="map_mmRentChange" style={divStyle} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateInfo: state.states
  };
};

export default connect(mapState)(DatMapApartmentsMMRentChange);
