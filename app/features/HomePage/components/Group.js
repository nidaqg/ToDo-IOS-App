import React from "react";
import { StyleSheet, Text, TouchableHighlight, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';


export const Group = ({title}) => {
    //use navigation hook to direct to new screen
    const navigation = useNavigation(); 
  return (
      //main  view, in entire square
      <TouchableHighlight 
      underlayColor="floralwhite"
      style={styles.group}
      onPress={() => navigation.navigate('ToDo')}>
          <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
  );
}


const styles = StyleSheet.create({
    group: {
        width: '40%',
        height: 150,
        backgroundColor: 'dodgerblue',
        margin: 15,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 30
    },
    text:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})