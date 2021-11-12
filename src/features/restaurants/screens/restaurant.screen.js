import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area";
import {
  RestaurantList,
  SearchContainer,
} from "../components/restaurant-info-card.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
