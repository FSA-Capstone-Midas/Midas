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
          info: "3.4%"
        },
        CO: {
          fillKey: "Democrat",
          info: "2.6%"
        },
        DE: {
          fillKey: "Democrat",
          info: "2.0%"
        },
        FL: {
          fillKey: "UNDECIDED",
          info: "3.3%"
        },
        GA: {
          fillKey: "Republican",
          info: "3.1%"
        },
        HI: {
          fillKey: "Democrat",
          info: "0%"
        },
        ID: {
          fillKey: "Republican",
          info: "4.2%"
        },
        IL: {
          fillKey: "Democrat",
          info: "1.0%"
        },
        IN: {
          fillKey: "Republican",
          info: "1.8%"
        },
        IA: {
          fillKey: "Light Democrat",
          info: "0.7%"
        },
        KS: {
          fillKey: "Republican",
          info: "1.6%"
        },
        KY: {
          fillKey: "Republican",
          info: "0%"
        },
        LA: {
          fillKey: "Republican",
          info: "1.0%"
        },
        MD: {
          fillKey: "Democrat",
          info: "0.9%"
        },
        ME: {
          fillKey: "Democrat",
          info: "1.5%"
        },
        MA: {
          fillKey: "Democrat",
          info: "2.7%"
        },
        MN: {
          fillKey: "Democrat",
          info: "3.0%"
        },
        MI: {
          fillKey: "Democrat",
          info: "2.1%"
        },
        MS: {
          fillKey: "Republican",
          info: "2.1%"
        },
        MO: {
          fillKey: "Republican",
          info: "0.8%"
        },
        MT: {
          fillKey: "Republican",
          info: "2.2%"
        },
        NC: {
          fillKey: "Light Republican",
          info: "2.3%"
        },
        NE: {
          fillKey: "Republican",
          info: "1.3%"
        },
        NV: {
          fillKey: "Heavy Democrat",
          info: "4.6%"
        },
        NH: {
          fillKey: "Light Democrat",
          info: "2.2%"
        },
        NJ: {
          fillKey: "Democrat",
          info: "1.4%"
        },
        NY: {
          fillKey: "Very High",
          info: "0.7%"
        },
        ND: {
          fillKey: "Republican",
          info: "-0.5%"
        },
        NM: {
          fillKey: "Democrat",
          info: "2.5%"
        },
        OH: {
          fillKey: "UNDECIDED",
          info: "1.6%"
        },
        OK: {
          fillKey: "Republican",
          info: "0%"
        },
        OR: {
          fillKey: "Democrat",
          info: "0.9%"
        },
        PA: {
          fillKey: "Democrat",
          info: "1.7%"
        },
        RI: {
          fillKey: "Democrat",
          info: "2.0%"
        },
        SC: {
          fillKey: "Republican",
          info: "2.0%"
        },
        SD: {
          fillKey: "Republican",
          info: "1.2%"
        },
        TN: {
          fillKey: "Republican",
          info: "1.7%"
        },
        TX: {
          fillKey: "Republican",
          info: "2.3%"
        },
        UT: {
          fillKey: "Republican",
          info: "4.3%"
        },
        WI: {
          fillKey: "Democrat",
          info: "0.9%"
        },
        VA: {
          fillKey: "Light Democrat",
          info: "1.4%"
        },
        VT: {
          fillKey: "Democrat",
          info: "1.9%"
        },
        WA: {
          fillKey: "Democrat",
          info: "3.5%"
        },
        WV: {
          fillKey: "Republican",
          info: "-1.5%"
        },
        WY: {
          fillKey: "Republican",
          info: "-1.1%"
        },
        CA: {
          fillKey: "Democrat",
          info: "3.6%"
        },
        CT: {
          fillKey: "Democrat",
          info: "1.3%"
        },
        AK: {
          fillKey: "Republican",
          info: "-1.0%"
        },
        AR: {
          fillKey: "Republican",
          info: "3.4%"
        },
        AL: {
          fillKey: "Republican",
          info: "0.6%"
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
