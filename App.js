import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <RestaurantScreen />
    </>
  );
}

const styles = StyleSheet.create({
  SAV: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  searchView: {
    padding: 14,
    justifyContent: "center",
  },
  mainView: {
    flex: 1,
    padding: 14,
    backgroundColor: "blue",
  },
  searchText: {},
  mainText: {},
});
