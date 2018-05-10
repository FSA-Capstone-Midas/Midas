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
        "Very High": "#800000",
        "Relative High": "#FF6666",
        "Relative Low": "#ffcccc",
        "Very Low": "#EAA9A8",
        defaultFill: "#EDDC4E"
      },
      data: {
        AZ: {
          fillKey: "Democrat",
          YYChange: "3.4%"
        },
        CO: {
          fillKey: "Democrat",
          YYChange: "2.6%"
        },
        DE: {
          fillKey: "Democrat",
          YYChange: "2.0%"
        },
        FL: {
          fillKey: "UNDECIDED",
          YYChange: "3.3%"
        },
        GA: {
          fillKey: "Republican",
          YYChange: "3.1%"
        },
        HI: {
          fillKey: "Democrat",
          YYChange: "0%"
        },
        ID: {
          fillKey: "Republican",
          YYChange: "4.2%"
        },
        IL: {
          fillKey: "Democrat",
          YYChange: "1.0%"
        },
        IN: {
          fillKey: "Republican",
          YYChange: "1.8%"
        },
        IA: {
          fillKey: "Light Democrat",
          YYChange: "0.7%"
        },
        KS: {
          fillKey: "Republican",
          YYChange: "1.6%"
        },
        KY: {
          fillKey: "Republican",
          YYChange: "0%"
        },
        LA: {
          fillKey: "Republican",
          YYChange: "1.0%"
        },
        MD: {
          fillKey: "Democrat",
          YYChange: "0.9%"
        },
        ME: {
          fillKey: "Democrat",
          YYChange: "1.5%"
        },
        MA: {
          fillKey: "Democrat",
          YYChange: "2.7%"
        },
        MN: {
          fillKey: "Democrat",
          YYChange: "3.0%"
        },
        MI: {
          fillKey: "Democrat",
          YYChange: "2.1%"
        },
        MS: {
          fillKey: "Republican",
          YYChange: "2.1%"
        },
        MO: {
          fillKey: "Republican",
          YYChange: "0.8%"
        },
        MT: {
          fillKey: "Republican",
          YYChange: "2.2%"
        },
        NC: {
          fillKey: "Light Republican",
          YYChange: "2.3%"
        },
        NE: {
          fillKey: "Republican",
          YYChange: "1.3%"
        },
        NV: {
          fillKey: "Heavy Democrat",
          YYChange: "4.6%"
        },
        NH: {
          fillKey: "Light Democrat",
          YYChange: "2.2%"
        },
        NJ: {
          fillKey: "Democrat",
          YYChange: "1.4%"
        },
        NY: {
          fillKey: "Very High",
          YYChange: "0.7%"
        },
        ND: {
          fillKey: "Republican",
          YYChange: "-0.5%"
        },
        NM: {
          fillKey: "Democrat",
          YYChange: "2.5%"
        },
        OH: {
          fillKey: "UNDECIDED",
          YYChange: "1.6%"
        },
        OK: {
          fillKey: "Republican",
          YYChange: "0%"
        },
        OR: {
          fillKey: "Democrat",
          YYChange: "0.9%"
        },
        PA: {
          fillKey: "Democrat",
          YYChange: "1.7%"
        },
        RI: {
          fillKey: "Democrat",
          YYChange: "2.0%"
        },
        SC: {
          fillKey: "Republican",
          YYChange: "2.0%"
        },
        SD: {
          fillKey: "Republican",
          YYChange: "1.2%"
        },
        TN: {
          fillKey: "Republican",
          YYChange: "1.7%"
        },
        TX: {
          fillKey: "Republican",
          YYChange: "2.3%"
        },
        UT: {
          fillKey: "Republican",
          YYChange: "4.3%"
        },
        WI: {
          fillKey: "Democrat",
          YYChange: "0.9%"
        },
        VA: {
          fillKey: "Light Democrat",
          YYChange: "1.4%"
        },
        VT: {
          fillKey: "Democrat",
          YYChange: "1.9%"
        },
        WA: {
          fillKey: "Democrat",
          YYChange: "3.5%"
        },
        WV: {
          fillKey: "Republican",
          YYChange: "-1.5%"
        },
        WY: {
          fillKey: "Republican",
          YYChange: "-1.1%"
        },
        CA: {
          fillKey: "Democrat",
          YYChange: "3.6%"
        },
        CT: {
          fillKey: "Democrat",
          YYChange: "1.3%"
        },
        AK: {
          fillKey: "Republican",
          YYChange: "-1.0%"
        },
        AR: {
          fillKey: "Republican",
          YYChange: "3.4%"
        },
        AL: {
          fillKey: "Republican",
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
