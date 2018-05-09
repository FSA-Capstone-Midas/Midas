import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

class DataMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: ""
    };
  }

  componentDidMount() {
    console.log(this.props.stateInfo);
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
            "Average Listing Price: " +
            data.avergeSalesPrice +
            `</br>` +
            "Median Sales Price: " +
            data.mediumSalesPrice +
            `</br>` +
            "Trulia popularity: " +
            data.popularity +
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
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        CO: {
          fillKey: "Very High",
          mediumSalesPrice: 5000
        },
        DE: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        FL: {
          fillKey: "UNDECIDED",
          mediumSalesPrice: 29
        },
        GA: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        HI: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        ID: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        IL: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        IN: {
          fillKey: "Republican",
          mediumSalesPrice: 11
        },
        IA: {
          fillKey: "Light Democrat",
          mediumSalesPrice: 11
        },
        KS: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        KY: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        LA: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        MD: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        ME: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        MA: {
          fillKey: "Democrat",
          mediumSalesPrice: 602
        },
        MN: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        MI: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        MS: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        MO: {
          fillKey: "Republican",
          mediumSalesPrice: 13
        },
        MT: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        NC: {
          fillKey: "Light Republican",
          mediumSalesPrice: 32
        },
        NE: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        NV: {
          fillKey: "Heavy Democrat",
          mediumSalesPrice: 32
        },
        NH: {
          fillKey: "Light Democrat",
          mediumSalesPrice: 32
        },
        NJ: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        NY: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        ND: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        NM: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        OH: {
          fillKey: "UNDECIDED",
          mediumSalesPrice: 32
        },
        OK: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        OR: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        PA: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        RI: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        SC: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        SD: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        TN: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        TX: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        UT: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        WI: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        VA: {
          fillKey: "Light Democrat",
          mediumSalesPrice: 32
        },
        VT: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        WA: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        WV: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        WY: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        CA: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        CT: {
          fillKey: "Democrat",
          mediumSalesPrice: 32
        },
        AK: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        AR: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        },
        AL: {
          fillKey: "Republican",
          mediumSalesPrice: 32
        }
      },
      done: function(map) {
        map.svg.selectAll(".datamaps-subunit").on("click", function(geo) {
          console.log(geo.id);
          console.log(geo.properties.name);
          var localData = map.options.data[geo.id];
          if (localData && localData.numberOfThings) {
            alert(localData.numberOfThings);
          }
        });
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
