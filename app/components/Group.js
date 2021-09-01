import React from "react";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';


function Group(props) {
    //use navigation hook to direct ot new screen
    const navigation = useNavigation(); 
  return (
      //main  view, in entire square
      <View style={styles.group}>

      <Pressable 
      style={styles.text}
      onPress={() => navigation.navigate('ToDo')}>

          <Text style={styles.text}>{props.title}</Text>

      </Pressable>
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
        borderRadius: 30
    },
    text:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})