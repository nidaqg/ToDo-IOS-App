import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert, ScrollView} from 'react-native';
import Group from '../components/Group';

function TaskGroups(props) {
 
const [taskgroup, setTaskgroup] = useState('');
const [grouplist, setGrouplist] =useState([]);

const handleChange =(text) => {
    setTaskgroup(text)
}

const handleSubmit = () => {
    Keyboard.dismiss();
    if(taskgroup){
    setGrouplist([...grouplist,(taskgroup)]);
    setTaskgroup(null)
    } else {
        Alert.alert("Oops! Looks like you forgot to enter a group name")
    }
}
    
return (
// main View, denotes entire screen
<SafeAreaView style={styles.container}>
{/* View holds header, task groups and user input */}
    <View style={styles.header}>
        <Text style={styles.text}>Let's Get It Done!</Text>
    </View>

    <View style={styles.group}>
        {/* use map to iterate over all the groups saved in grouplist array */}

        {
            grouplist.map((item, index) => {
                return <Group
                key={index}
                title={item}
                />
            })
        }
        <Group title={"Groceries"}/>
        <Group title={"School Stuff"}/>
        <Group title={"Daily"}/>
        <Group title={"Target"}/>
    </View>

    
{/* User input area */}
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? 'padding': "height"}
        style={styles.inputcontainer}>
            {/* input box */}
        <TextInput 
        onChangeText={handleChange}
        value={taskgroup}
        style={styles.input}
        placeholder={"Add a new task group"}
        />

{/* add task button */}
        <TouchableOpacity
            style={styles.addgroup}
            onPress={() => handleSubmit()}
            >
                <Text style={styles.addBtn}>+</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>

 </SafeAreaView>
)};

//stylesheets

const styles = StyleSheet.create ({
    container: {
     flex: 1,
     backgroundColor: 'floralwhite'
    },
    group:{
     flexDirection: 'row',
      justifyContent: 'center',
     top: 100,
     flexWrap: 'wrap'
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        top: 50        
    },
    inputcontainer:{
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
         borderRadius:60,
         borderWidth:1
       },
       addgroup:{
           width: 60,
           height: 60,
           backgroundColor: 'white',
           borderRadius:60,
           borderWidth:1,
           alignItems: 'center',
           justifyContent: 'center'
     
        
       },
       addBtn: {
           color:'black',
         fontSize: 30,
         fontWeight: 'bold'
       }

})

export default TaskGroups;

