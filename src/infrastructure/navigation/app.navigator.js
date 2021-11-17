import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utility/safe-area";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/maps/screens/map.screen";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const screenoption = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case "Restaurant":
        iconName = focused ? "restaurant" : "restaurant-outline";
        break;
      case "Map":
        iconName = focused ? "map" : "map-outline";
        break;
      case "Settings":
        iconName = focused ? "settings-sharp" : "settings-outline";
        break;

      default:
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenoption}>
      <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export const AppNavigation = () => {
  return <MyTabs />;
};
