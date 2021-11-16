import { mockImages, localImages, mocks } from "./mock";
import { Platform } from "react-native";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
const isAndroid = Platform.OS === "android";
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.aphotos = restaurant.photos.map((p) => {
      return localImages[Math.ceil(Math.random() * (localImages.length - 1))];
    });

    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemp: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedResults);
};
