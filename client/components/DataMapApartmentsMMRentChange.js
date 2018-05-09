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
          info: "0.2%"
        },
        CO: {
          fillKey: "Democrat",
          info: "0.2%"
        },
        DE: {
          fillKey: "Democrat",
          info: "-0.1%"
        },
        FL: {
          fillKey: "UNDECIDED",
          info: "0.1%"
        },
        GA: {
          fillKey: "Republican",
          info: "0.1%"
        },
        HI: {
          fillKey: "Democrat",
          info: "0.5%"
        },
        ID: {
          fillKey: "Republican",
          info: "-0.3%"
        },
        IL: {
          fillKey: "Democrat",
          info: "0%"
        },
        IN: {
          fillKey: "Republican",
          info: "0%"
        },
        IA: {
          fillKey: "Light Democrat",
          info: "-0.2%"
        },
        KS: {
          fillKey: "Republican",
          info: "0.2%"
        },
        KY: {
          fillKey: "Republican",
          info: "0.1%"
        },
        LA: {
          fillKey: "Republican",
          info: "0.4%"
        },
        MD: {
          fillKey: "Democrat",
          info: "-0.1%"
        },
        ME: {
          fillKey: "Democrat",
          info: "-0.5%"
        },
        MA: {
          fillKey: "Democrat",
          info: "0.7%"
        },
        MN: {
          fillKey: "Democrat",
          info: "0.3%"
        },
        MI: {
          fillKey: "Democrat",
          info: "-0.1%"
        },
        MS: {
          fillKey: "Republican",
          info: "-0.1%"
        },
        MO: {
          fillKey: "Republican",
          info: "-0.2%"
        },
        MT: {
          fillKey: "Republican",
          info: "0.3%"
        },
        NC: {
          fillKey: "Light Republican",
          info: "0.1%"
        },
        NE: {
          fillKey: "Republican",
          info: "0.1%"
        },
        NV: {
          fillKey: "Heavy Democrat",
          info: "0.3%"
        },
        NH: {
          fillKey: "Light Democrat",
          info: "0%"
        },
        NJ: {
          fillKey: "Democrat",
          info: "0.2%"
        },
        NY: {
          fillKey: "Very High",
          info: "0%"
        },
        ND: {
          fillKey: "Republican",
          info: "-0.6%"
        },
        NM: {
          fillKey: "Democrat",
          info: "0.4%"
        },
        OH: {
          fillKey: "UNDECIDED",
          info: "0%"
        },
        OK: {
          fillKey: "Republican",
          info: "-0.1%"
        },
        OR: {
          fillKey: "Democrat",
          info: "0.7%"
        },
        PA: {
          fillKey: "Democrat",
          info: "-0.2%"
        },
        RI: {
          fillKey: "Democrat",
          info: "-0.9%"
        },
        SC: {
          fillKey: "Republican",
          info: "0.1%"
        },
        SD: {
          fillKey: "Republican",
          info: "0.2%"
        },
        TN: {
          fillKey: "Republican",
          info: "0%"
        },
        TX: {
          fillKey: "Republican",
          info: "-0.1%"
        },
        UT: {
          fillKey: "Republican",
          info: "0%"
        },
        WI: {
          fillKey: "Democrat",
          info: "0%"
        },
        VA: {
          fillKey: "Light Democrat",
          info: "0.2%"
        },
        VT: {
          fillKey: "Democrat",
          info: "-0.2%"
        },
        WA: {
          fillKey: "Democrat",
          info: "-0.8%"
        },
        WV: {
          fillKey: "Republican",
          info: "-0.4%"
        },
        WY: {
          fillKey: "Republican",
          info: "0.2%"
        },
        CA: {
          fillKey: "Democrat",
          info: "0.2%"
        },
        CT: {
          fillKey: "Democrat",
          info: "0.2%"
        },
        AK: {
          fillKey: "Republican",
          info: "-0.3%"
        },
        AR: {
          fillKey: "Republican",
          info: "0.1%"
        },
        AL: {
          fillKey: "Republican",
          info: "-0.5%"
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
