import React from "react";
import { Platform } from "react-native";
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
import { Favourite } from "../../../components/favourites/favourite.component";

const isAndroid = Platform.OS === "android";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Havila",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    aphotos = [],
    address = "100 Some Resto Street",
    isOpenedNow = true,
    rating = 4,
    isClosedTemp = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RCard elevation={5}>
      <RCard.Cover source={isAndroid ? aphotos[0] : { url: photos[0] }} />
      <Favourite restaurant={restaurant} />
      <RCard.Content>
        <Titlee>{name}</Titlee>
        <Row>
          {ratingArray.map((_, i) => (
            <SvgXml
              key={`star-${placeId}-${i}`}
              xml={star}
              width={20}
              height={20}
            />
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
