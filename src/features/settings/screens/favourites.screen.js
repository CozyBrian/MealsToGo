import React, { useContext } from "react";
import styled from "styled-components";
import { Text } from "../../../components/text";
import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 12,
  },
})``;

const NoFavCon = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  if (!favourites.length) {
    return (
      <NoFavCon>
        <Text>You have No Favourites</Text>
      </NoFavCon>
    );
  } else {
    return (
      <FavouritesList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    );
  }
};
