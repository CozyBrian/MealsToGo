import React from "react";
import { SvgXml } from "react-native-svg";
import {
  Titlee,
  Icon,
  Row,
  Right,
  RedText,
  Spacer,
  RCard,
  P,
} from "./restaurant-info-card.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Havila",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some Resto Street",
    isOpenedNow = true,
    rating = 4,
    isClosedTemp = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RCard elevation={5}>
      <RCard.Cover source={{ url: photos[0] }} />
      <RCard.Content>
        <Titlee>{name}</Titlee>
        <Row>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
          <Right>
            {isClosedTemp && <RedText>CLOSED TEMPORAILY</RedText>}
            <Spacer />
            {isOpenedNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            <Spacer />
            <Icon source={{ uri: icon }} />
          </Right>
        </Row>
        <P>{address}</P>
      </RCard.Content>
    </RCard>
  );
};
