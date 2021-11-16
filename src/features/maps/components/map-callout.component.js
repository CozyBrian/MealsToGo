import React from "react";
import { CompactRestaurantInfo } from "../../restaurants/components/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
