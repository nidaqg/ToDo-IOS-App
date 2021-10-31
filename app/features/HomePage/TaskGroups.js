import React, { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { FlipInView } from "./components/animations";

import { Group } from "./components/Group";
import { Header } from "./components/Header";
import {
  SafeArea,
  GroupSquare,
  InputContainer,
  UserInput,
  FloatingBtn
} from "./components/styles";

export const TaskGroups = () => {
  const [taskgroup, setTaskgroup] = useState(null);
  const [grouplist, setGrouplist] = useState([]);

  const [hidden, setHidden] = useState(true)

  //function for submit button
  const handleSubmit = () => {
    if (taskgroup) {
      setGrouplist([...grouplist, taskgroup]);
      setTaskgroup(null);
    } else {
      Alert.alert("Oops! Looks like you forgot to enter a group name");
    }
  };

  
  return (
    <SafeArea>
          <Header/>
      <ScrollView>

      <GroupSquare>
        {grouplist.map((item, index) => {
          return <Group key={index} title={item} />;
        })}
        <Group title={"Groceries"} />
        <Group title={"School Stuff"} />
        <Group title={"Daily"} />
        <Group title={"Target"} />
      </GroupSquare>
      </ScrollView>

      <FloatingBtn
    icon="plus"
    onPress={() => setHidden(false)}
     />

{hidden ? (
null
) : (
  <FlipInView>
<InputContainer>
<UserInput style={{width: 300}}
onChangeText={(taskgroup)=> setTaskgroup(taskgroup)}
value={taskgroup}
placeholder="add a task group"
right={<TextInput.Icon 
  name="plus-circle-outline"
  onPress={()=> {
    handleSubmit();
  }}/>}
  left={<TextInput.Icon
    name="close"
    onPress={() => setHidden(true)}
    />}

/>
</InputContainer>
</FlipInView>
)}

      
    </SafeArea>
  );
};
