import React from "react";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {useFocusEffect} from "@react-navigation/native";

function WelcomeScreen({navigation}) {


useFocusEffect(() => {
  setTimeout(()=> {navigation.navigate('TaskGroups')}, 1000)
})

  return (
    //background image
    <ImageBackground
      style={styles.background}
      resizeMode="contain"
      source={require("../assets/logo.gif")}>

      <View 
      style={styles.blue}
      onPress={() => navigation.navigate('ToDo')}>
      </View>

      <View style={styles.red}></View> 
    </ImageBackground>
  );
}

//CSS styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'white',
  },
  blue: {
    backgroundColor: "tomato",
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
