import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function Group(props) {
  return (
      //main  view, in entire square
      <View style={styles.group}>
          <Text style={styles.text}>{props.title}</Text>

      </View>
  );
}

export default Group;

const styles = StyleSheet.create({
    group: {
        width: '40%',
        height: 100,
        backgroundColor: 'tomato',
        margin: 15,
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'black',
        borderWidth:1,
        borderRadius: 10
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
    }
})