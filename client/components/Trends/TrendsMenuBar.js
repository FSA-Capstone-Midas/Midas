import React from "react";

const TrendsMenuBar = props => {
  return (
    <div className="four wide column">
      <div className="ui vertical menu" style={{ fontSize: "15px" }}>
        <div className="item">
          <div className="header">House</div>
          <div className="menu">
            <a
              className="item"
              name="avgListingPrice"
              onClick={props.handleClick}
              style={{ color: "brown" }}
            >
              Average Listing Price
            </a>
            <a
              className="item"
              name="medianSalesPrice"
              onClick={props.handleClick}
              style={{ color: "brown" }}
            >
              Median Sales Price
            </a>
            <a
              className="item"
              name="truliaPopularity"
              onClick={props.handleClick}
              style={{ color: "brown" }}
            >
              Trulia Popularity
            </a>
          </div>
        </div>
        <div className="item">
          <div className="header">Apartment</div>
          <div className="menu">
            <a
              className="item"
              name="1BedRoomRent"
              onClick={props.handleClick}
              style={{ color: "chocolate" }}
            >
              1 Bed Room Rent
            </a>
            <a
              className="item"
              name="2BedRoomRent"
              onClick={props.handleClick}
              style={{ color: "chocolate" }}
            >
              2 Bed Rooms Rent
            </a>
          </div>
        </div>
        <div className="item">
          <div className="header">Apartment % Change</div>
          <div className="menu">
            <a
              className="item"
              name="monthlyChange"
              onClick={props.handleClick}
              style={{ color: "green" }}
            >
              Monthly Change
            </a>
            <a
              className="item"
              name="yearlyChange"
              onClick={props.handleClick}
              style={{ color: "green" }}
            >
              Yearly Change
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsMenuBar;
