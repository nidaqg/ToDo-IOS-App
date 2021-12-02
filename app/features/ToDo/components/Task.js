import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function Task(props) {
  return (
    // main view, is entire task
    <View style={styles.task}>
      {/* the left view holds the blue box + the text */}
      <View style={styles.left}>
        <TouchableOpacity 
        style={styles.square}
        onPress={props.onSubmit}
        >

        </TouchableOpacity>
        <Text style={styles.itemtext}>{props.item}</Text>
      </View>

    </View>
  );
}

export default Task;

const styles = StyleSheet.create({
  task: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemtext: {
    fontSize: 20,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    borderColor:'black',
    borderWidth:2,
    borderRadius: 20,
    marginRight: 20,
  }
});
