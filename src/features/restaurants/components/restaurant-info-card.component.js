/* eslint-disable no-unused-vars */
import React from "react";
import { Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Havila",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some Resto Street",
    isOpenedNow = true,
    rating = 4,
    isClosedTemp = true,
  } = restaurant;

  return (
    <Card>
      <Card.Cover source={{ url: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};
