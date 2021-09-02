import React, { useState } from 'react';
import {StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Pressable, Button } from 'react-native';
import Task from '../components/Task';
import {useNavigation} from '@react-navigation/native'

function ToDo(props) {

    const navigation = useNavigation();

    const [task, setTask] = useState('');
    const[tasklist, setTasklist] = useState([])

    //function to handle change in input box
    const handleChange = (text) => {
      setTask(text)
    }

    //function to handle clicking of add button
    const handleAddTask =()=> {
        Keyboard.dismiss();
        setTasklist([...tasklist, task])
        setTask(null)
    }

    // function to handle deleting task
    const deleteTask =(index) => {
      let listCopy = [...tasklist]
      listCopy.splice(index, 1);
      setTasklist(listCopy)
    }
    
    return(
        <>
        <SafeAreaView style={styles.container}>

            {/* back button */}

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('TaskGroups')}>
            <Text style={styles.buttontext}>Back</Text>
            
            </TouchableOpacity>
 
           {/* task container */}
            <View style={styles.taskscontainer}>
            <Text style={styles.header}>To Do</Text>

            <View style={styles.list}>
                {/* use map to iterate over all the tasks in the tasklist array */}
            {
                tasklist.map((item, index) => {
                   return <Task 
                     onSubmit={()=> deleteTask(index)}
                       key={index}
                   item={item}/>
                   
                   
                })
            }

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
        onChangeText={handleChange}
        value ={task}
        />

{/* add task button */}
        <TouchableOpacity
        onPress= {() => handleAddTask()}
        >
            <View style={styles.addtaskcontainer}>
             <Text style={styles.addtext}>+</Text>
            </View>
        </TouchableOpacity>

        </KeyboardAvoidingView>
        </>
    )
};

export default ToDo;


//stylesheets
const styles= StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',

    },
    taskscontainer:{
        paddingTop:50,
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
     alignItems:'center'

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
    button: {
        backgroundColor: 'tomato',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        top:20,
        marginLeft:20,
        width:70,
    },
    buttontext: {
        fontSize: 20
    }
})