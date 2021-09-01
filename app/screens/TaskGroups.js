import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, Button } from 'react-native';
import Group from '../components/Group';

function TaskGroups(props) {
 
const [taskgroup, setTaskgroup] = useState('');
const [grouplist, setGrouplist] =useState([]);

const handleChange =(text) => {
    setTaskgroup(text)
}

const handleSubmit = (e) => {
    Keyboard.dismiss();
    setGrouplist([...grouplist,(taskgroup)])
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
        <TouchableOpacity>
            <Button 
            title={"+"}
            style={styles.addgroup}
            onPress={handleSubmit}
            >
            </Button>
        </TouchableOpacity>

        </KeyboardAvoidingView>


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
        opacity: 0.4,
         borderRadius:60,
         borderWidth:1
       },
       addgroup:{
           width: 60,
           height: 60,
           backgroundColor: 'white',
           opacity: 0.4,
           borderRadius:60,
           borderWidth:1,
           alignItems: 'center',
           justifyContent: 'center'
     
        
       },
       addtext: {
         fontSize: 30,
         fontWeight: 'bold'
       }

})

export default TaskGroups;

