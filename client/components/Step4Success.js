import React, { Component } from "react";
import { ResponsiveStream } from "@nivo/stream";

const data = [
  {
    Raoul: 164,
    Josiane: 29,
    Marcel: 59,
    René: 81,
    Paul: 132,
    Jacques: 108,
  },
  {
    Raoul: 147,
    Josiane: 100,
    Marcel: 195,
    René: 150,
    Paul: 158,
    Jacques: 126,
  },
  {
    Raoul: 139,
    Josiane: 73,
    Marcel: 140,
    René: 53,
    Paul: 143,
    Jacques: 169,
  },
  {
    Raoul: 113,
    Josiane: 198,
    Marcel: 18,
    René: 100,
    Paul: 154,
    Jacques: 36,
  },
  {
    Raoul: 59,
    Josiane: 50,
    Marcel: 195,
    René: 54,
    Paul: 40,
    Jacques: 36,
  },
  {
    Raoul: 107,
    Josiane: 200,
    Marcel: 163,
    René: 142,
    Paul: 148,
    Jacques: 78,
  },
  {
    Raoul: 80,
    Josiane: 116,
    Marcel: 53,
    René: 69,
    Paul: 99,
    Jacques: 68,
  },
  {
    Raoul: 141,
    Josiane: 96,
    Marcel: 86,
    René: 86,
    Paul: 126,
    Jacques: 29,
  },
  {
    Raoul: 102,
    Josiane: 26,
    Marcel: 45,
    René: 47,
    Paul: 41,
    Jacques: 191,
  },
  {
    Raoul: 125,
    Josiane: 162,
    Marcel: 130,
    René: 105,
    Paul: 133,
    Jacques: 198,
  },
  {
    Raoul: 112,
    Josiane: 61,
    Marcel: 57,
    René: 189,
    Paul: 105,
    Jacques: 20,
  },
  {
    Raoul: 88,
    Josiane: 108,
    Marcel: 56,
    René: 127,
    Paul: 151,
    Jacques: 79,
  },
  {
    Raoul: 118,
    Josiane: 90,
    Marcel: 162,
    René: 162,
    Paul: 132,
    Jacques: 75,
  },
  {
    Raoul: 192,
    Josiane: 100,
    Marcel: 95,
    René: 75,
    Paul: 132,
    Jacques: 85,
  },
  {
    Raoul: 80,
    Josiane: 171,
    Marcel: 70,
    René: 165,
    Paul: 70,
    Jacques: 192,
  },
  {
    Raoul: 64,
    Josiane: 197,
    Marcel: 44,
    René: 187,
    Paul: 106,
    Jacques: 178,
  },
];

const keys = ["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"];

class Step4Success extends Component {
  render() {
    return (
      <div style={{ height: 400 }}>
        <h2>Does this render?</h2>
        <ResponsiveStream
          data={data}
          keys={keys}
          margin={{
            top: 50,
            right: 110,
            bottom: 50,
            left: 60,
          }}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
          }}
          curve="natural"
          offsetType="none"
          fillOpacity={0.8}
          borderColor="#000"
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#2c998f",
              size: 4,
              padding: 2,
              stagger: true,
            },
            {
              id: "squares",
              type: "patternSquares",
              background: "inherit",
              color: "#e4c912",
              size: 6,
              padding: 2,
              stagger: true,
            },
          ]}
          fill={[
            {
              match: {
                id: "Paul",
              },
              id: "dots",
            },
            {
              match: {
                id: "Marcel",
              },
              id: "squares",
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              symbolSize: 12,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    );
  }
}

export default Step4Success;