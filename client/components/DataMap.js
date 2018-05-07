import React, { Component } from "react";
import Datamap from "datamaps";

class DataMap extends Component {
  constructor(props) {
    super(props);
  }
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
            "Electoral Votes:" +
            data.electoralVotes +
            " "
          );
        },
        highlightBorderWidth: 3
      },

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
          mediumSalesPrice: 5
        },
        CO: {
          fillKey: "Very High",
          mediumSalesPrice: 5
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
    var bubble_map = new Datamap({
      element: document.getElementById("map_election2"),
      scope: "canada",
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: "#444",
        borderWidth: 0.5,
        dataUrl:
          "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/canada.topo.json"
        //dataJson: topoJsonData
      },
      fills: {
        MAJOR: "#306596",
        MEDIUM: "#0fa0fa",
        MINOR: "#bada55",
        defaultFill: "#dddddd"
      },
      data: {
        JH: { fillKey: "MINOR" },
        MH: { fillKey: "MINOR" }
      },
      setProjection: function(element) {
        var projection = d3.geo
          .mercator()
          .center([-106.3468, 68.1304]) // always in [East Latitude, North Longitude]
          .scale(250)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geo.path().projection(projection);
        return { path: path, projection: projection };
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Average Housing Price(sales) - 2017</h1>
        <div id="map_election" />
        <div id="map_election2" />
      </div>
    );
  }
}

export default DataMap;
