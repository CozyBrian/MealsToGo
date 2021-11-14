import React from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "./restaurant-info-card.styles";

export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
  );
};
