import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.searchView}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.mainView}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SAV: {
    flex: 1,
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
