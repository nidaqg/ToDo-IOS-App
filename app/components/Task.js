import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function Task(props) {
  return (
    // main view, is entire task
    <View style={styles.task}>
      {/* the left view holds the blue box + the text */}
      <View style={styles.left}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemtext}>{props.item}</Text>
      </View>

      {/*Right view holds the done checkbox  */}
      <View style={styles.right}></View>
    </View>
  );
}

export default Task;

const styles = StyleSheet.create({
  task: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    marginRight: 20,
  },
  right: {
    width: 12,
    height: 12,
    borderColor: "dodgerblue",
    borderWidth: 2,
    borderRadius: 10,
  },
});
