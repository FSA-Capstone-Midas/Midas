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
          info: "$322,398"
        },
        CO: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        DE: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        FL: {
          fillKey: "UNDECIDED",
          info: "$322,398"
        },
        GA: {
          fillKey: "Republican",
          info: "$322,398"
        },
        HI: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        ID: {
          fillKey: "Republican",
          info: "$322,398"
        },
        IL: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        IN: {
          fillKey: "Republican",
          info: "$322,398"
        },
        IA: {
          fillKey: "Light Democrat",
          info: "$322,398"
        },
        KS: {
          fillKey: "Republican",
          info: "$322,398"
        },
        KY: {
          fillKey: "Republican",
          info: "$322,398"
        },
        LA: {
          fillKey: "Republican",
          info: "$322,398"
        },
        MD: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        ME: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        MA: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        MN: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        MI: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        MS: {
          fillKey: "Republican",
          info: "$322,398"
        },
        MO: {
          fillKey: "Republican",
          info: "$322,398"
        },
        MT: {
          fillKey: "Republican",
          info: "$322,398"
        },
        NC: {
          fillKey: "Light Republican",
          info: "$322,398"
        },
        NE: {
          fillKey: "Republican",
          info: "$322,398"
        },
        NV: {
          fillKey: "Heavy Democrat",
          info: "$322,398"
        },
        NH: {
          fillKey: "Light Democrat",
          info: "$322,398"
        },
        NJ: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        NY: {
          fillKey: "Very High",
          info: "$322,398"
        },
        ND: {
          fillKey: "Republican",
          info: "$322,398"
        },
        NM: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        OH: {
          fillKey: "UNDECIDED",
          info: "$322,398"
        },
        OK: {
          fillKey: "Republican",
          info: "$322,398"
        },
        OR: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        PA: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        RI: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        SC: {
          fillKey: "Republican",
          info: "$322,398"
        },
        SD: {
          fillKey: "Republican",
          info: "$322,398"
        },
        TN: {
          fillKey: "Republican",
          info: "$322,398"
        },
        TX: {
          fillKey: "Republican",
          info: "$322,398"
        },
        UT: {
          fillKey: "Republican",
          info: "$322,398"
        },
        WI: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        VA: {
          fillKey: "Light Democrat",
          info: "$322,398"
        },
        VT: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        WA: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        WV: {
          fillKey: "Republican",
          info: "$322,398"
        },
        WY: {
          fillKey: "Republican",
          info: "$322,398"
        },
        CA: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        CT: {
          fillKey: "Democrat",
          info: "$322,398"
        },
        AK: {
          fillKey: "Republican",
          info: "$322,398"
        },
        AR: {
          fillKey: "Republican",
          info: "$322,398"
        },
        AL: {
          fillKey: "Republican",
          info: "$322,398"
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
