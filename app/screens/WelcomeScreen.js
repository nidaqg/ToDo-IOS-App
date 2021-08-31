import React from "react";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import ToDo from './ToDo';


function WelcomeScreen({navigation}) {
  return (
    //background image
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("../assets/rain.jpg")}>
      {/* <Text style={styles.logo}>Weather App</Text> */}

      <TouchableOpacity 
      style={styles.blue}
      onPress={() => navigation.navigate('ToDo')}>
        <Text style={styles.text}>Let's get started!</Text>
      </TouchableOpacity>

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
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  red: {
    backgroundColor: "tomato",
    width: "100%",
    height: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default WelcomeScreen;
