import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";
import { Segment } from "semantic-react";

class DataMap extends Component {
  componentDidMount() {
    var Map = new Datamap({
      scope: "usa",
      element: document.getElementById("map_election"),
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function(geography, data) {
          return (
            '<div class="hoverinfo">' +
            geography.properties.name +
            `</br>` +
            "Electoral Votes:" +
            data.electoralVotes +
            `</br>` +
            "Average sales Price: " +
            data.mediumSalesPrice +
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
        High: "#ff1a1a",
        "Relative High": "#FF6666",
        Low: "#ff9999",
        "Relative Low": "#ffcccc",
        "Very Low": "#EAA9A8",
        defaultFill: "#EDDC4E"
      },
      data: {
        AZ: {
          fillKey: "High",
          electoralVotes: 5
        },
        CO: {
          fillKey: "Very High",
          mediumSalesPrice: 5000
        },
        DE: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        FL: {
          fillKey: "UNDECIDED",
          electoralVotes: 29
        },
        GA: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        HI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        ID: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        IL: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        IN: {
          fillKey: "Republican",
          electoralVotes: 11
        },
        IA: {
          fillKey: "Light Democrat",
          electoralVotes: 11
        },
        KS: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        KY: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        LA: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        MD: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        ME: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        MA: {
          fillKey: "Democrat",
          electoralVotes: 602
        },
        MN: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        MI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        MS: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        MO: {
          fillKey: "Republican",
          electoralVotes: 13
        },
        MT: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        NC: {
          fillKey: "Light Republican",
          electoralVotes: 32
        },
        NE: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        NV: {
          fillKey: "Heavy Democrat",
          electoralVotes: 32
        },
        NH: {
          fillKey: "Light Democrat",
          electoralVotes: 32
        },
        NJ: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        NY: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        ND: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        NM: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        OH: {
          fillKey: "UNDECIDED",
          electoralVotes: 32
        },
        OK: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        OR: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        PA: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        RI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        SC: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        SD: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        TN: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        TX: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        UT: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        WI: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        VA: {
          fillKey: "Light Democrat",
          electoralVotes: 32
        },
        VT: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        WA: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        WV: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        WY: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        CA: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        CT: {
          fillKey: "Democrat",
          electoralVotes: 32
        },
        AK: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        AR: {
          fillKey: "Republican",
          electoralVotes: 32
        },
        AL: {
          fillKey: "Republican",
          electoralVotes: 32
        }
      }
    });
  }

  render() {
    const divStyle = {
      position: "relative",
      width: "2500px",
      height: "1200px"
    };
    return (
      <div>
        <div id="map_election" style={divStyle} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateInfo: state.states
  };
};

export default connect(mapState)(DataMap);
