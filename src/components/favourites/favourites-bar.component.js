import React from "react";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../../features/restaurants/components/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const Spacer = styled.View`
  padding: 2px;
`;

const Text = styled.Text`
  font-size: 10px;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const FavouritesBar = ({ favourites, onDetail }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer>
        <Text>FAVOURITES</Text>
      </Spacer>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() =>
                  onDetail("RestaurantDetail", {
                    restaurant: restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
