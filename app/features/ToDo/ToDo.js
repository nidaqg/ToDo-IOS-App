import React, { useState } from 'react';
import {StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Image, Alert} from 'react-native';
import Task from './components/Task';
import {useNavigation} from '@react-navigation/native'

export const ToDo = () => {

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
        if(task){
        setTasklist([...tasklist, task])
        setTask(null)
        } else {
            Alert.alert("Oops, looks like you forgot to enter a task!")
        }
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
        onPress= {() => navigation.navigate('TaskGroups')}
        >
            <View style={styles.backBtn}>
                <Image 
                source={require("../../assets/back.png")}
                style={{ width: 35, height: 35 }}
                />
            </View>
        </TouchableOpacity>
 
           {/* task container */}
            <View style={styles.taskscontainer}>
            <Text style={styles.header}>To Do</Text>

            <View>
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
             <Text style={styles.addBtn}>+</Text>
            </View>
        </TouchableOpacity>

        </KeyboardAvoidingView>
        </>
    )
};



//stylesheets
const styles= StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#db7093',

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
      borderRadius:60,
      borderWidth:1
    },
    addtaskcontainer:{
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius:60,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center'
  
     
    },
    backBtn: {
        width: 60,
        height: 40,
        backgroundColor: 'white',
        borderRadius:20,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        alignItems:'center',
        justifyContent: 'center'
    },
    buttontext: {
        fontSize: 20
    },
    addBtn: {
        color:'black',
      fontSize: 30,
      fontWeight: 'bold'
    }
})