import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';


function Group(props) {
    //use navigation hook to direct ot new screen
    const navigation = useNavigation(); 
  return (
      //main  view, in entire square
      
      <TouchableHighlight 
      underlayColor="floralwhite"
      style={styles.group}
      onPress={() => navigation.navigate('ToDo')}>

          <Text style={styles.text}>{props.title}</Text>

      </TouchableHighlight>
  );
}

export default Group;

const styles = StyleSheet.create({
    group: {
        width: '40%',
        height: 150,
        backgroundColor: '#db7093',
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