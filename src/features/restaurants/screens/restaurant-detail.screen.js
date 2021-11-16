import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { SafeAreaRDS } from "../../../components/utility/safe-area";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const MenuView = () => {
  return (
    <>
      <StatusBar style="light" />
      <ScrollView>
        <List.Section title="MENU">
          <List.Accordion
            title="Breakfast"
            left={(props) => (
              <List.Icon {...props} icon="bread-slice-outline" />
            )}
          >
            <List.Item title="Kooko with Fried Bean-Cake" />
            <List.Item title="Iced Lipton Beverage with Sausage Sandwich" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="food" />}
          >
            <List.Item title="Assorted Fried-Rice with Fish" />
            <List.Item title="Special Jollof with Fish" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => (
              <List.Icon {...props} icon="silverware-fork-knife" />
            )}
          >
            <List.Item title="Banku with Fish and Okra Soup" />
            <List.Item title="Fufu with Chicken and Groundnut Soup" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
          >
            <List.Item title="Sobolo" />
            <List.Item title="Coka Cola" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeAreaRDS>
      <RestaurantInfoCard restaurant={restaurant} />
      <MenuView />
    </SafeAreaRDS>
  );
};
