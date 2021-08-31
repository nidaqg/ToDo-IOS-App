import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Group from '../components/Group';

function TaskGroups(props) {

return (


<SafeAreaView style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.text}>Let's Get It Done!</Text>
    </View>
    <View style={styles.group}>
        <Group title={"Groceries"}/>
        <Group title={"School Stuff"}/>
        <Group title={"Daily"}/>
        <Group title={"Target"}/>


    </View>


</SafeAreaView>
)};

//stylesheets

const styles = StyleSheet.create ({
    container: {
     flex: 1,
     backgroundColor: 'white'
    },
    group:{
     flexDirection: 'row',
     justifyContent: 'center',
     top: 15,
     flexWrap: 'wrap'
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        top: 15
        
    }

})

export default TaskGroups;

