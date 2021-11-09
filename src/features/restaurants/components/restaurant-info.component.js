import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Havila",
    icon,
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address = "100 Some Resto Street",
    isOpenedNow = true,
    rating = 4,
    isClosedTemp = true
  } = restaurant;
  return <Text>{name}</Text>;
};
