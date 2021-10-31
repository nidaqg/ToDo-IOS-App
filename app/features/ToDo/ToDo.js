import React, { useState } from 'react';
import {StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, Alert, ScrollView} from 'react-native';
import Task from './components/Task';
import {useNavigation} from '@react-navigation/native'
import { TextInput, Button } from 'react-native-paper';

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
        <View>
     <Button 
    style={{alignSelf:'flex-start'}}
    color="black"
    icon="arrow-left"
    onPress={() => navigation.goBack()}
    >Back</Button>
    <Text style={styles.header}></Text>

        </View>
    <ScrollView>
            <View style={styles.taskscontainer}>

            <View>
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

         </ScrollView>   
        </SafeAreaView>

        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? 'padding': "height"}
        style={styles.writetaskcontainer}>


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
        backgroundColor: 'white',

    },
    taskscontainer:{
        paddingVertical:10,
        paddingHorizontal: 20
    },
    header: {
        fontSize:24,
        fontWeight:'bold',
        margin:15
    },
    writetaskcontainer:{
     position: 'absolute',
     bottom: 10,
     width: '100%',
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems:'center'

    },
    input: {
     width:300,
     backgroundColor: 'white',
      borderRadius:5,
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