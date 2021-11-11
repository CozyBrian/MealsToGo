import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";
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

  const Titlee = styled(Title)`
    font-family: ${(props) => props.theme.fonts.body};
  `;

  const Row = styled.View`
    flex-direction: row;
    align-items: center;
  `;

  const Right = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
  `;

  const Spacer = styled.View`
    padding-left: 8px;
  `;

  const P = styled(Paragraph)`
    font-family: ${(props) => props.theme.fonts.heading};
  `;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Card.Cover source={{ url: photos[0] }} />
      <Card.Content>
        <Titlee>{name}</Titlee>
        <Row>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
          <Right>
            {isClosedTemp && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORAILY
              </Text>
            )}
            <Spacer />
            {isOpenedNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            <Spacer />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Right>
        </Row>
        <P>{address}</P>
      </Card.Content>
    </Card>
  );
};
