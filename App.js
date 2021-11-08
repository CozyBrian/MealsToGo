import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
    <ExpoStatusBar style="auto" />
    <SafeAreaView style={styles.SAV}>
        <View style={styles.searchView}>
          <Text style={styles.searchText}>Search</Text>
        </View>
        <View style={styles.mainView}>
          <Text style={styles.mainText}>Main</Text>
        </View>
    </SafeAreaView>
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
    backgroundColor: "green",
  },
  mainView: {
    flex: 1,
    padding: 14,
    backgroundColor: "blue",
  },
  searchText: {
  },
  mainText: {
  }
});
