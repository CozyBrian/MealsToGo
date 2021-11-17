import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyD8_mTfRi2NxXtlHHoGyFjbpcTajCCjPK8",
  authDomain: "mealstogo-a9a9d.firebaseapp.com",
  projectId: "mealstogo-a9a9d",
  storageBucket: "mealstogo-a9a9d.appspot.com",
  messagingSenderId: "444615070596",
  appId: "1:444615070596:web:d91c763626b8cd18a303d1",
};

initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "email", "password")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log(e);
        //const errorCode = error.code;
        //const errorMessage = error.message;
      });
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ExpoStatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
