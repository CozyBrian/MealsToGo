import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;

  const [latDelta, setlatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setlatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: restaurant,
                  })
                }
              >
                <View>
                  <MapCallout restaurant={restaurant} />
                </View>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
