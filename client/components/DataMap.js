import React, { Component } from "react";
import Datamap from "datamaps";
import { connect } from "react-redux";

class DataMap extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("hiii");
    console.log(event.target);
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
          fillKey: "Very Low",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        CO: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        DE: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        FL: {
          fillKey: "UNDECIDED",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        GA: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        HI: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        ID: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        IL: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        IN: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        IA: {
          fillKey: "Light Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        KS: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        KY: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        LA: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        MD: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        ME: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        MA: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        MN: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        MI: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        MS: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        MO: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        MT: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        NC: {
          fillKey: "Light Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        NE: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        NV: {
          fillKey: "Heavy Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        NH: {
          fillKey: "Light Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        NJ: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        NY: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        ND: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        NM: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        OH: {
          fillKey: "UNDECIDED",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        OK: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        OR: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        PA: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        RI: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        SC: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        SD: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        TN: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        TX: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        UT: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        WI: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        VA: {
          fillKey: "Light Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        VT: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        WA: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        WV: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        WY: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        CA: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        CT: {
          fillKey: "Democrat",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        AK: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        AR: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        },
        AL: {
          fillKey: "Republican",
          avergeSalesPrice: "$322,398",
          mediumSalesPrice: "$225,000",
          popularity: 15
        }
      },
      done: function(map) {
        map.svg.selectAll(".datamaps-subunit").on("click", function(geo) {
          console.log(geo.id);
          console.log(geo.properties.name);
          var localData = map.options.data[geo.id];
          console.log(localData);
        });
      }
    });
    Map.labels();
  }

  render() {
    console.log(this.props.stateInfo);
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
