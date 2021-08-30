import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    //background image
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("../assets/rain.jpg")}
    >
      {/* <Text style={styles.logo}>Weather App</Text> */}

      <View style={styles.blue}></View>

      <View style={styles.red}></View>
    </ImageBackground>
  );
}

//CSS styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  blue: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 70,
  },
  red: {
    backgroundColor: "tomato",
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;
