import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from '../components/Task';


function ToDo(props) {
    return(
        <>
        <SafeAreaView style={styles.container}>

            <View style={styles.taskscontainer}>
            <Text style={styles.header}>Things to do</Text>

            <View style={styles.list}>
             <Task item={"make coffee"}></Task>
             <Task item={"grocery shopping"}></Task>
             <Task item={"pick up kids from school"}></Task>

            </View>
            </View>
        </SafeAreaView>

        {/*  user input area at bottom of screen */}
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? 'padding': "height"}
        style={styles.writetaskcontainer}>
            {/* input box */}
        <TextInput 
        style={styles.input}
        placeholder={"What to do?"}
        />

{/* add task button */}
        <TouchableOpacity>
            <View style={styles.addtaskcontainer}>
             <Text style={styles.addtext}>+</Text>
            </View>
        </TouchableOpacity>

        </KeyboardAvoidingView>
        </>
    )
};

export default ToDo;

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#EBEAED'
    },
    taskscontainer:{
        paddingTop:80,
        paddingHorizontal: 20
    },
    header: {
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20
    },
    list: {

    },
    writetaskcontainer:{
     position: 'absolute',
     bottom: 60,
     width: '100%',
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'

    },
    input: {
     paddingVertical: 15,
     paddingHorizontal: 15,
     width:300,
     backgroundColor: 'white',
     opacity: 0.4,
      borderRadius:60,
      borderColor: 'dodgerblue',
      borderWidth:1
    },
    addtaskcontainer:{
        width: 60,
        height: 60,
        backgroundColor: 'white',
        opacity: 0.4,
        borderRadius:60,
        borderColor: 'dodgerblue',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center'
  
     
    },
    addtext: {

    }
})