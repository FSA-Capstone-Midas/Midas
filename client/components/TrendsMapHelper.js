import React from "react";
import DataMapHousing from "./DataMapHousing";
import DataMapHousingMedSales from "./DataMapHousingMedSales";
import DataMapApartments1Br from "./DataMapApartments";
import DataMapApartments2Br from "./DataMapApartments2Br";
import DatMapApartmentsMMRentChange from "./DataMapApartmentsMMRentChange";
import DatMapApartmentsYYRentChange from "./DataMapApartmentYYRentChange";

//house
const AVG_LISTING_PRICE = "avgListingPrice";
const MEDIAN_SALES_PRICE = "medianSalesPrice";
const TRULIA_POPULARITY = "truliaPopularity";

//Apartment
const ONE_BED_ROOM_RENT = "1BedRoomRent";
const TWO_BED_ROOM_RENT = "2BedRoomRent";

//Apartment % Change
const APT_MM_CHANGE = "monthlyChange";
const APT_YY_CHANGE = "yearlyChange";

const renderMap = currentMap => {
  switch (currentMap) {
    case AVG_LISTING_PRICE:
      return <DataMapHousing />;
    case MEDIAN_SALES_PRICE:
      return <DataMapHousingMedSales />;
    case TRULIA_POPULARITY:
    // return <DataMapHousing />;
    case ONE_BED_ROOM_RENT:
      return <DataMapApartments1Br />;
    case TWO_BED_ROOM_RENT:
      return <DataMapApartments2Br />;
    case APT_MM_CHANGE:
      return <DatMapApartmentsMMRentChange />;
    case APT_YY_CHANGE:
      return <DatMapApartmentsYYRentChange />;
    default:
      return <DataMapHousing />;
  }
};

export default renderMap;
