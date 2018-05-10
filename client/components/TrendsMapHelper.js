import React from "react";
import DataMapHousing from "./DataMapHousing";
import DataMapApartments from "./DataMapApartments";

//house
const AVG_LISTING_PRICE = "avgListingPrice";
const MEDIAN_SALES_PRICE = "medianSalesPrice";
const TRULIA_POPULARITY = "truliaPopularity";

//Apartment
const ONE_BED_ROOM_RENT = "1BedRoomRent";

const renderMap = currentMap => {
  switch (currentMap) {
    case AVG_LISTING_PRICE:
      return <DataMapHousing />;
    case ONE_BED_ROOM_RENT:
      return <DataMapApartments />;
    default:
      return <DataMapHousing />;
  }
};

export default renderMap;
